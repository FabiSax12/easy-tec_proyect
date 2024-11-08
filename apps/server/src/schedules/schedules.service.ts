import { Injectable, HttpException, HttpStatus } from "@nestjs/common"
import * as fs from "node:fs/promises"
import * as puppeteer from "puppeteer"
import { ResponseDto } from "src/types/shared/response.dto"

interface Schedule {
  day: string;
  start: string;
  end: string;
}

export interface ScheduleRow {
  id: string;
  code: string;
  subject: string;
  group: number;
  credits: number;
  schedule: Schedule;
  schedules: Schedule[];
  classroom: string;
  teacher: string;
  teachers: string[];
  totalSpaces: number;
  typeOfSubject: string;
  typeOfGroup: string;
  reserved: number;
}

@Injectable()
export class ScheduleService {
  constructor() { }

  private async saveCookies(page: puppeteer.Page) {
    const cookies = await page.cookies()
    await fs.writeFile("./cookies.json", JSON.stringify(cookies, null, 2))
  }

  private async loadCookies(page: puppeteer.Page) {
    try {
      if (await fs.access("./cookies.json").then(() => true).catch(() => false)) {
        const cookies = JSON.parse(await fs.readFile("./cookies.json", "utf-8"))
        if (cookies.length > 0) await page.setCookie(...cookies)
      } else {
        await fs.writeFile("./cookies.json", "[]")
      }
    } catch (error) {
      throw new HttpException("Error loading cookies", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  private async preventResources(page: puppeteer.Page) {
    await page.setRequestInterception(true)
    page.on("request", (request) => {
      if (["image", "font"].includes(request.resourceType())) request.abort()
      else request.continue()
    })
  }

  async login(page: puppeteer.Page, email: string, password: string) {
    if (page.url().includes("tecdigital.tec.ac.cr/register/")) {
      await page.type("#mail-input", email, { delay: 10 })
      await page.type("#password-input", password, { delay: 10 })

      await page.evaluate(() => {
        const button = document.querySelector<HTMLButtonElement>("button[type='submit']")
        button?.removeAttribute("disabled")
        button?.click()
      })

      await page.waitForNavigation()
      await this.saveCookies(page)
    }
  }

  async selectInfo(page: puppeteer.Page, campus: string, carrier: string, period: string) {
    await page.evaluate((campus, carrier, period) => {
      document.querySelector("#sede_n")?.setAttribute("value", campus)
      document.querySelector("#carrera_n")?.setAttribute("value", carrier)
      document.querySelector("#periodo_n")?.setAttribute("value", period)
    }, campus, carrier, period)
  }

  async getSchedule(
    campus: string,
    carrier: string,
    period: string,
    credentials: { email: string; password: string },
  ): Promise<ResponseDto<Partial<ScheduleRow>[]>> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })
    const page = await browser.newPage()

    try {
      await this.preventResources(page)
      await this.loadCookies(page)
      await page.goto("https://tecdigital.tec.ac.cr/tda-expediente-estudiantil/")
      await this.login(page, credentials.email, credentials.password)

      await page.click("button#guia_horario")
      await page.waitForSelector("div#sede_n")
      await this.selectInfo(page, campus, carrier, period)
      await page.click("i#imgBuscar")
      await page.waitForSelector("table#tguiaHorario")

      const data = await this.extractTableData(page)
      return {
        statusCode: HttpStatus.OK,
        message: "Schedules scrapped succesfully",
        data: data,
      }
    } catch (error) {
      throw new HttpException("Error fetching schedule data", HttpStatus.INTERNAL_SERVER_ERROR)
    } finally {
      await browser.close()
    }
  }

  private async extractTableData(page: puppeteer.Page): Promise<Partial<ScheduleRow>[]> {
    return page.evaluate(() => {
      const table = document.querySelector<HTMLTableElement>("#tguiaHorario")
      const headers = Array.from(table?.querySelectorAll("thead th") || []).map((th: HTMLTableColElement) => th.innerText)
      const rows = Array.from(table?.querySelectorAll("tbody tr") || [])

      const data = rows.map(row => {
        const cells = Array.from(row.querySelectorAll("td"))
        const dataRow: ScheduleRow = {
          id: "",
          code: "",
          subject: "",
          group: 0,
          credits: 0,
          schedule: { day: "", start: "", end: "" },
          schedules: [],
          classroom: "",
          teacher: "",
          teachers: [],
          totalSpaces: 0,
          typeOfSubject: "",
          typeOfGroup: "",
          reserved: 0,
        }

        cells.forEach((cell, index) => {
          switch (headers[index]) {
            case "Código":
              dataRow.code = cell.innerText.trim()
              break
            case "Materia":
              dataRow.subject = cell.innerText.trim()
              break
            case "Grupo":
              dataRow.group = parseInt(cell.innerText.trim(), 10)
              break
            case "Créditos":
              dataRow.credits = parseInt(cell.innerText.trim(), 10)
              break
            case "Horario":
              const schedule = cell.innerText.split(" - ")
              const day = schedule[0].slice(0, 3)
              const times = schedule[1].split(":")
              const hour1 = times[0] + ":" + (times[1].length == 2 ? times[1] : times[1] + "0")
              const hour2 = times[2] + ":" + (times[3].length == 2 ? times[3] : times[3] + "0")

              dataRow.schedule = {
                day,
                start: hour1,
                end: hour2
              }
              break
            case "Aula":
              dataRow.classroom = cell.innerText.trim()
              break
            case "Profesor":
              dataRow.teacher = cell.innerText.trim()
              dataRow.teachers.push(dataRow.teacher) // Agrega al array de profesores
              break
            case "Cupo":
              dataRow.totalSpaces = parseInt(cell.innerText.trim(), 10)
              break
            case "Tipo Materia":
              dataRow.typeOfSubject = cell.innerText.trim()
              break
            case "Tipo Grupo":
              dataRow.typeOfGroup = cell.innerText.trim()
              break
            case "Reservados":
              dataRow.reserved = parseInt(cell.innerText.trim(), 10)
              break
          }
        })

        dataRow.id = `${dataRow.code}-${dataRow.group}-${dataRow.teacher.split(" ").map(w => w[0]).join("")}`

        return dataRow
      })

      const combinedData: Partial<ScheduleRow>[] = []

      data.forEach(row => {
        const existingRow = combinedData.find(item => item.code === row.code && item.group === row.group)

        if (existingRow) {
          // Agrega el horario si no está duplicado
          if (!existingRow.schedules.some(s => s.day === row.schedule.day && s.start === row.schedule.start && s.end === row.schedule.end)) {
            existingRow.schedules.push(row.schedule)
          }
          // Agrega el profesor si no está duplicado
          if (!existingRow.teachers.includes(row.teacher)) {
            existingRow.teachers.push(row.teacher)
          }
        } else {
          // Crear una nueva entrada
          combinedData.push({
            ...row,
            schedules: [row.schedule],
            teachers: [row.teacher],
          })
        }
      })

      return combinedData
    })
  }
}
