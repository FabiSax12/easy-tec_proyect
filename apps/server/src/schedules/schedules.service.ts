import {HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common"
import {JSDOM} from "jsdom"
import {Agent} from "node:https"
import {CompleteCourseRow, MergedCourseRow, ScheduleRow, SimpleCourseRow} from "../types/schedules"

@Injectable()
export class ScheduleService {
  async fetchSchedule(campus: string, carrier: string, period: string): Promise<string> {
    const response = await fetch("https://tecdigital.tec.ac.cr/tda-expediente-estudiantil/ajax/tabla_guia_horario", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `sede=${campus}&carrera=${carrier}&periodo=${period}`
    })

    if (!response.ok) {
      throw new HttpException("Error fetching schedule data", HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return await response.text()
  }

  async getSchedule(campus: string, carrier: string, period: string): Promise<Partial<ScheduleRow>[]> {
    try {
      const tableString = await this.fetchSchedule(campus, carrier, period)
      const dom = new JSDOM(tableString)
      const tableHtml = dom.window.document
      const table = tableHtml.querySelector("table")

      if (!table) {
        throw new NotFoundException("No se encontró la tabla de horarios.")
      }

      return await this.extractTableData(table)
    } catch (error) {
      console.error(error)
      throw new HttpException("Error al obtener los datos del horario", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  private async extractTableData(table: HTMLTableElement): Promise<Partial<ScheduleRow>[]> {
    const headers = Array.from(table.querySelectorAll("thead th") || []).map((th) => (th as HTMLElement).textContent)

    if (headers.length === 0) {
      throw new NotFoundException("La tabla no tiene encabezados.")
    }

    const rows = Array.from(table.querySelectorAll("tbody tr") || [])

    const data = rows.map((row) => {
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
            if (cell.textContent.trim().includes("En este momento no hay información disponible para el periodo consultado.")) {
              throw new NotFoundException("Error en el TEC Digital")
            }
            dataRow.code = cell.textContent.trim()
            break
          case "Materia":
            dataRow.subject = cell.textContent.trim()
            break
          case "Grupo":
            dataRow.group = parseInt(cell.textContent.trim(), 10)
            break
          case "Créditos":
            dataRow.credits = parseInt(cell.textContent.trim(), 10)
            break
          case "Horario":
            const schedule = cell.textContent.split(" - ")
            dataRow.schedule = {
              day: schedule[0].slice(0, 3),
              start: schedule[1].split(":").slice(0, 2).join(":"),
              end: schedule[1].split(":").slice(2, 4).join(":"),
            }
            break
          case "Aula":
            dataRow.classroom = cell.textContent.trim()
            break
          case "Profesor":
            dataRow.teacher = cell.textContent.trim()
            dataRow.teachers.push(dataRow.teacher)
            break
          case "Cupo":
            dataRow.totalSpaces = parseInt(cell.textContent.trim(), 10)
            break
          case "Tipo Materia":
            dataRow.typeOfSubject = cell.textContent.trim()
            break
          case "Tipo Grupo":
            dataRow.typeOfGroup = cell.textContent.trim()
            break
          case "Reservados":
            dataRow.reserved = parseInt(cell.textContent.trim(), 10)
            break
        }
      })

      dataRow.id = `${dataRow.code}-${dataRow.group}-${dataRow.teacher.split(" ").map((w) => w[0]).join("")}`
      return dataRow
    })

    return data.reduce((acc: Partial<ScheduleRow>[], row) => {
      const existingRow = acc.find((item) => item.code === row.code && item.group === row.group)
      if (existingRow) {
        if (!existingRow.schedules.some((s) => s.day === row.schedule.day && s.start === row.schedule.start && s.end === row.schedule.end)) {
          existingRow.schedules.push(row.schedule)
        }
        if (!existingRow.teachers.includes(row.teacher)) {
          existingRow.teachers.push(row.teacher)
        }
      } else {
        acc.push({ ...row, schedules: [row.schedule], teachers: [row.teacher] })
      }
      return acc
    }, [])
  }

  async getScheduleByStudentId(studentId: string) {
    const courses = await this.fetchScheduleByStudentId(studentId)
    return this.getUniqueCourses(courses)
  }

  private async getUniqueCourses(data: CompleteCourseRow[]) {
    const cursosMap = new Map()

    data.forEach(curso => {
      const code = curso.IDE_MATERIA
      const name = curso.DSC_MATERIA

      if (!cursosMap.has(code)) {
        cursosMap.set(code, name)
      }
    })

    return Array.from(cursosMap, ([code, name]) => ({ code, name }))
  }

  async fetchScheduleByStudentId(studentId: string): Promise<CompleteCourseRow[]> {
    const response = await fetch("https://tec-appsext.itcr.ac.cr/guiahorarios/estudiante.aspx/getdatos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ carnet: studentId }),
      agent: new Agent({ rejectUnauthorized: false })
    } as any)

    const data = await response.json()
    return JSON.parse(data.d)
  }

  async getSpecificitiesSchedules(
      studentId: string,
      requestedCourses: { code: string; campus: { name: string; typeOfGroup: string }[] }[]
  ): Promise<SimpleCourseRow[]> {
    const allCourses = await this.fetchScheduleByStudentId(studentId)

    const filteredCourses = allCourses.filter(course =>
        requestedCourses.some(req =>
            course.IDE_MATERIA === req.code &&
            req.campus.some(c =>
                course.DSC_SEDE === c.name &&
                course.TIPO_CURSO === c.typeOfGroup
            )
        )
    )

    const mergedCourses = this.mergeCourseGroups(filteredCourses)

    return mergedCourses.map(this.completeToSimpleCourseRow)
  }

  private mergeCourseGroups(courses: CompleteCourseRow[]): MergedCourseRow[] {
    const mergedMap = new Map<string, MergedCourseRow>()

    courses.forEach(course => {
      const key = `${course.IDE_MATERIA}-${course.IDE_GRUPO}-${course.DSC_SEDE}`

      if (!mergedMap.has(key)) {
        mergedMap.set(key, {
          ...course,
          HORARIOS: []
        })
      }

      mergedMap.get(key).HORARIOS.push({
        day: course.NOM_DIA,
        start: course.HINICIO,
        end: course.HFIN
      })
    })

    return Array.from(mergedMap.values())
  }

  private completeToSimpleCourseRow(course: MergedCourseRow): SimpleCourseRow {
    return {
      campus: course.DSC_SEDE,
      code: course.IDE_MATERIA,
      name: course.DSC_MATERIA,
      group: course.IDE_GRUPO,
      department: course.DSC_DEPTO,
      credits: course.CAN_CREDITOS,
      modeId: course.IDE_MODALIDAD,
      mode: course.DSC_MODALIDAD,
      type: course.TIPO_CURSO,
      teacher: course.NOM_PROFESOR,
      schedules: course.HORARIOS
    }
  }
}
