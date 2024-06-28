import { createContext, useState } from "react"
import { ScheduleRow } from "@/interfaces/api-data/schedule"

interface ScheduleContextProps {
  selectedSubjects: ScheduleRow[]
  addSubject: (subject: ScheduleRow) => void
  removeSubject: (subject: ScheduleRow) => void
}

const ScheduleContext = createContext<ScheduleContextProps | undefined>(undefined)

const ScheduleContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<ScheduleRow[]>([])

  const addSubject = (subject: ScheduleRow) => {
    setSelectedSubjects((prev) => [...prev, subject])
  }

  const removeSubject = (subject: ScheduleRow) => {
    setSelectedSubjects((prev) => prev.filter((s) => s.id !== subject.id))
  }

  return (
    <ScheduleContext.Provider value={{ selectedSubjects, addSubject, removeSubject }}>
      {children}
    </ScheduleContext.Provider>
  )
}

export { ScheduleContext, ScheduleContextProvider }