import { createContext, useState } from "react"

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

interface ScheduleContextProps {
  selectedSubjects: ScheduleRow[]
  addSubject: (subject: ScheduleRow) => void
  removeSubject: (subject: ScheduleRow) => void
}

const ScheduleContext = createContext<ScheduleContextProps | undefined>(undefined)

const SchedulesProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<ScheduleRow[]>([])

  const addSubject = (subject: ScheduleRow) => {
    console.log("Añadiendo materia", subject)
    setSelectedSubjects((prev) => [...prev, subject])
  }

  const removeSubject = (subject: ScheduleRow) => {
    setSelectedSubjects((prev) => prev.filter((s) => s.id !== subject.id))
  }

  return (
    <ScheduleContext.Provider value={{ selectedSubjects, addSubject, removeSubject }
    }>
      {children}
    </ScheduleContext.Provider>
  )
}

export { ScheduleContext, SchedulesProvider }