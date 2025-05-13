import { createContext, useState, useCallback, useMemo } from "react"
import { ScheduleRow } from "@/interfaces/courses-schedule"

interface ScheduleContextProps {
  selectedSubjects: ScheduleRow[]
  selectedSubjectsIds: Set<string>
  addSubject: (subject: ScheduleRow) => void
  removeSubject: (subjectId: string) => void
  clearSubjects: () => void
  setSelectedSubjects: (subject: ScheduleRow[]) => void
  setSubjectColor: (subjectId: string, color: string) => void
}

const ScheduleContext = createContext<ScheduleContextProps | undefined>(undefined)

const SchedulesProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<Map<string, ScheduleRow>>(() => {
    const saved = localStorage.getItem("selectedSubjects")
    if (!saved) return new Map()
    return new Map(JSON.parse(saved).map((subject: ScheduleRow) => [subject.id, subject]))
  })

  const addSubject = useCallback((subject: ScheduleRow) => {
    setSelectedSubjects((prev) => new Map(prev.set(subject.id, subject)))

    localStorage.setItem("selectedSubjects", JSON.stringify(Array.from(selectedSubjects.values())))
  }, [selectedSubjects])

  const removeSubject = useCallback((subjectId: string) => {
    setSelectedSubjects((prev) => {
      const newSubjects = new Map(prev)
      newSubjects.delete(subjectId)
      localStorage.setItem("selectedSubjects", JSON.stringify(Array.from(newSubjects.values())))
      return newSubjects
    })
  }, [])

  const clearSubjects = useCallback(() => {
    setSelectedSubjects(new Map())
    localStorage.removeItem("selectedSubjects")
  }, [])

  const setSubjects = useCallback((subjects: ScheduleRow[]) => {
    setSelectedSubjects(new Map(subjects.map((subject: ScheduleRow) => [subject.id, subject])))
  }, [])

  const setSubjectColor = useCallback((subjectId: string, color: string) => {
    setSelectedSubjects((prev) => {
      const newSubjects = new Map(prev)
      console.log(newSubjects.get(subjectId)?.color)
      newSubjects.get(subjectId)!.color = color
      console.log(newSubjects.get(subjectId)?.color)
      localStorage.setItem("selectedSubjects", JSON.stringify(Array.from(newSubjects.values())))
      return newSubjects
    })
  }, [])

  const selectedSubjectsArray = Array.from(selectedSubjects.values())
  const selectedSubjectsIds = useMemo(() => new Set(selectedSubjectsArray.map(subject => subject.id)), [selectedSubjectsArray])

  return (
    <ScheduleContext.Provider
      value={
        {
          selectedSubjects: selectedSubjectsArray,
          selectedSubjectsIds,
          addSubject,
          removeSubject,
          clearSubjects,
          setSelectedSubjects: setSubjects,
          setSubjectColor
        }
      }
    >
      {children}
    </ScheduleContext.Provider>
  )
}

export { ScheduleContext, SchedulesProvider }