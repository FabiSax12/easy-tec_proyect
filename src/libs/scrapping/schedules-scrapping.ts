/* eslint-disable indent */
import fs from "fs/promises"
import puppeteer, { Page } from "puppeteer"
import { ScheduleRow } from "@/interfaces/api-data/schedule"

async function saveCookies(page: Page) {
  const cookies = await page.cookies()
  await fs.writeFile("./cookies.json", JSON.stringify(cookies, null, 2))
}

async function loadCookies(page: Page) {
  if (await fs.access("./cookies.json").then(() => true).catch(() => false)) {
    const cookies = JSON.parse(await fs.readFile("./cookies.json", "utf-8"))
    if (cookies.length > 0) {
      await page.setCookie(...cookies)
    }
  } else {
    await fs.writeFile("./cookies.json", "[]")
  }
}

async function preventResources(page: Page) {
  await page.setRequestInterception(true)

  page.on("request", (request) => {
    if (["image", "font"].includes(request.resourceType())) {
      request.abort()
    } else {
      request.continue()
    }
  })
}

async function login(page: Page, email: string, password: string) {
  if (page.url().includes("tecdigital.tec.ac.cr/register/")) {
    await page.type("#mail-input", email, { delay: 10 })
    await page.type("#password-input", password, { delay: 10 })

    await page.evaluate(() => {
      const button = document.querySelector<HTMLButtonElement>("button[type='submit']")
      button?.removeAttribute("disabled")
      button?.click()
    })

    await page.waitForNavigation()
    await saveCookies(page)
  }
}

async function selectInfo(page: Page, campus: string, carrier: string, period: string) {
  await page.evaluate((campus, carrier, period) => {
    const campusSelect = document.querySelector("#sede_n")
    const carrierSelect = document.querySelector("#carrera_n")
    const periodSelect = document.querySelector("#periodo_n")

    campusSelect?.setAttribute("value", campus)
    carrierSelect?.setAttribute("value", carrier)
    periodSelect?.setAttribute("value", period)

  }, campus, carrier, period)
}

async function getSchedule(campus: string, carrier: string, period: string, credentials: { email: string, password: string }) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    // executablePath: process.env.NODE_ENV === "production" ? "/usr/bin/chromium-browser" : puppeteer.executablePath()
  })
  const page = await browser.newPage()

  await preventResources(page)
  await loadCookies(page)

  await page.goto("https://tecdigital.tec.ac.cr/tda-expediente-estudiantil/")
  await login(page, credentials.email, credentials.password)

  await page.click("button#guia_horario")

  await page.waitForSelector("div#sede_n")
  await selectInfo(page, campus, carrier, period)
  await page.click("i#imgBuscar")

  await page.waitForSelector("table#tguiaHorario")
  const json = await page.evaluate(() => {
    const table = document.querySelector<HTMLTableElement>("#tguiaHorario")

    const headers = Array.from(
      table?.querySelectorAll<HTMLTableCaptionElement>("thead th") || []
    ).map(th => th.innerText)

    const tableRows = Array.from(table?.querySelectorAll("tbody tr") || [])

    const data = tableRows.map(row => {
      const cells = Array.from(row.querySelectorAll("td"))
      const dataRow: Partial<ScheduleRow> = {}

      cells.forEach((cell, index) => {
        switch (headers[index]) {
          case "Código": dataRow.code = cell.innerText
            break
          case "Materia": dataRow.subject = cell.innerText
            break
          case "Horario":
            const schedule = cell.innerText.split(" - ")
            const day = schedule[0].slice(0, 3)
            const times = schedule[1].split(":")
            const hour1 = times[0] + ":" + times[1]
            const hour2 = times[2] + ":" + times[3]

            dataRow.schedule = {
              day,
              start: hour1,
              end: hour2
            }
            break
          case "Aula": dataRow.classroom = cell.innerText
            break
          case "Profesor": dataRow.teacher = cell.innerText
            break
          case "Tipo Materia": dataRow.typeOfSubject = cell.innerText
            break
          case "Tipo Grupo": dataRow.typeOfGroup = cell.innerText
            break
          case "Grupo": dataRow.group = parseInt(cell.innerText)
            break
          case "Créditos": dataRow.credits = parseInt(cell.innerText)
            break
          case "Cupo": dataRow.totalSpaces = parseInt(cell.innerText)
            break
          case "Reservados": dataRow.reserved = parseInt(cell.innerText)
        }
      })

      dataRow.id = dataRow.code!
        + dataRow.group!
        + dataRow.teacher?.split(" ").map(word => word[0]).join("")
        + dataRow.schedule?.day
        + dataRow.schedule?.start
        + dataRow.schedule?.end // crypto.randomUUID()

      return dataRow
    })

    // Combine rows with the same code
    const combinedData: Partial<ScheduleRow>[] = []

    data.forEach(row => {
      const existingRow = combinedData.find(item => item.code === row.code && item.group === row.group)

      if (existingRow) {
        existingRow.teachers = existingRow.teachers || []
        existingRow.schedules = existingRow.schedules || []
        if (row.teacher && !existingRow.teachers.includes(row.teacher)) {
          existingRow.teachers.push(row.teacher)
        }

        if (row.schedule && !existingRow.schedules.some(schedule => {
          return row.schedule?.day === schedule.day && row.schedule.start === schedule.start
        })) {
          console.log(existingRow.schedules, row.schedule)
          existingRow.schedules.push(row.schedule)
        }
      } else {
        const newRow = {
          ...row,
          teachers: row.teacher ? [row.teacher] : [],
          schedules: row.schedule ? [row.schedule] : []
        }
        combinedData.push(newRow)
      }
    })

    return combinedData
  })

  await browser.close()
  return json
}

export { getSchedule }