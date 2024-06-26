import { useCallback, type Dispatch, type SetStateAction } from "react"
import { ScheduleRow } from "@/interfaces/api-data/schedule"
import { Selection, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const columns = [
  { key: "code", label: "CÓDIGO" },
  { key: "subject", label: "NOMBRE" },
  { key: "group", label: "GRUPO" },
  { key: "teacher", label: "PROFESOR" },
  { key: "schedule", label: "HORAS" },
  { key: "credits", label: "CREDITOS" },
]

interface Props {
  schedules: ScheduleRow[]
  selectedSubjects: ScheduleRow[]
  setSelectedSubjects: Dispatch<SetStateAction<ScheduleRow[]>>
}

export const SchedulesTable = ({ selectedSubjects, setSelectedSubjects, schedules }: Props) => {
  const handleSelectionChange = useCallback((key: Selection) => {
    setSelectedSubjects(prevState => {
      if (key === "all") return prevState
      if (key === undefined) return []
      if (key instanceof Set) return schedules.filter(schedule => key.has(schedule.id))
      return prevState
    })
  }, [])

  const getDisabledKeys = () => {
    return new Set(
      schedules.filter(
        schedule => selectedSubjects.some(
          selected => selected.code === schedule.code && selected.group !== schedule.group
        )
      ).map(
        item => item.id
      )
    )
  }

  return (
    <Table
      isHeaderSticky
      aria-label="Tabla de horarios"
      selectionMode="multiple"
      selectionBehavior="toggle"
      selectedKeys={new Set(selectedSubjects.map(schedule => schedule.id))}
      onSelectionChange={handleSelectionChange}
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
    </Table>
  )
}
