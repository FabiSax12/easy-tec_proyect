import { useCallback, useEffect, useState } from "react"
import { useSchedule } from "@/modules/schedule/hooks/useSchedules"
import { Selection, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const columns = [
  { key: "code", label: "CÓDIGO" },
  { key: "subject", label: "NOMBRE" },
  { key: "group", label: "GRUPO" },
  { key: "teacher", label: "PROFESOR" },
  { key: "schedule", label: "HORAS" },
  { key: "credits", label: "CREDITOS" },
]

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

interface Props {
  schedules: ScheduleRow[]
}

export const SchedulesTable = ({ schedules }: Props) => {
  const { selectedSubjects = [], addSubject, removeSubject } = useSchedule()
  const [localeSelectedSubjects, setLocaleSelectedSubjects] = useState<ScheduleRow[]>(selectedSubjects)

  useEffect(() => {
    const newSelectedSubjects = selectedSubjects.filter(subject => (
      schedules.some(schedule => schedule.id === subject.id)
    ))
    setLocaleSelectedSubjects(newSelectedSubjects)
  }, [selectedSubjects, schedules])


  const handleSelectionChange = useCallback((key: Selection) => {
    if (key === "all") return
    if (key === undefined) {
      setLocaleSelectedSubjects([])
      selectedSubjects.forEach(subject => removeSubject(subject))
      return
    }

    if (key instanceof Set) {
      const newSelectedSubjects = schedules.filter(schedule => key.has(schedule.id))
      const addedSubjects = newSelectedSubjects.filter(subject => !localeSelectedSubjects.some(s => s.id === subject.id))
      const removedSubjects = localeSelectedSubjects.filter(subject => !key.has(subject.id))

      addedSubjects.forEach(subject => addSubject(subject))
      removedSubjects.forEach(subject => removeSubject(subject))
      setLocaleSelectedSubjects(newSelectedSubjects)
    }
  }, [addSubject, removeSubject, schedules, selectedSubjects, localeSelectedSubjects])

  const getDisabledKeys = () => new Set(
    schedules.filter(
      schedule => localeSelectedSubjects.some(
        selected => selected.code === schedule.code && selected.group !== schedule.group
      )
    ).map(item => item.id)
  )

  const getSelectedKeys = () => new Set(localeSelectedSubjects.map(schedule => schedule.id))

  return (
    <Table
      isHeaderSticky
      aria-label="Tabla de horarios"
      selectionMode="multiple"
      selectionBehavior="toggle"
      onSelectionChange={handleSelectionChange}
      selectedKeys={getSelectedKeys()}
      disabledKeys={getDisabledKeys()}
      classNames={{ base: "max-h-[80vh]" }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={schedules} emptyContent="No hay horarios disponibles">
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>{item.code}</TableCell>
            <TableCell>{item.subject}</TableCell>
            <TableCell>{item.group}</TableCell>
            <TableCell>
              {item.teachers.map((teacher, idx) => <p key={idx}>{teacher}</p>)}
            </TableCell>
            <TableCell>
              {item.schedules.map((schedule, idx) => <p key={idx}>
                {`${schedule.day} ${schedule.start} - ${schedule.end}`}
              </p>)}
            </TableCell>
            <TableCell>{item.credits}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table >
  )
}