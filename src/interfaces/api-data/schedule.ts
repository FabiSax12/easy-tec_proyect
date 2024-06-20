interface Schedule {
  day: string
  start: string
  end: string
}

export interface ScheduleRow {
  id: string
  code: string
  subject: string
  group: number
  credits: number
  schedule: Schedule
  schedules: Schedule[]
  classroom: string
  teacher: string
  teachers: string[]
  totalSpaces: number
  typeOfSubject: string
  typeOfGroup: string
  reserved: number
}