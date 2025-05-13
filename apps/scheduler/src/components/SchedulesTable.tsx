import { useCallback, useMemo, useState } from "react"
import { useSchedule } from "@/hooks/useSchedules"
import { Pagination, Selection, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@easy-tec/ui"
import { ScheduleRow } from "@/interfaces/courses-schedule"

const columns: {
  key: keyof ScheduleRow,
  label: string
}[] = [
    { key: "code", label: "CÓDIGO" },
    { key: "subject", label: "NOMBRE" },
    { key: "group", label: "GRUPO" },
    { key: "teachers", label: "PROFESOR" },
    { key: "schedules", label: "HORAS" },
    { key: "credits", label: "CREDITOS" },
    { key: "typeOfGroup", label: "TIPO DE GRUPO" },
    // { key: "typeOfSubject", label: "TIPO DE MATERIA" },
  ]

interface Props {
  schedules: ScheduleRow[]
  isLoading: boolean
}

export const SchedulesTable = ({ schedules, isLoading }: Props) => {
  const { selectedSubjects = [], selectedSubjectsIds, addSubject, removeSubject } = useSchedule()

  const handleSelectionChange = useCallback((key: Selection) => {
    if (key === "all") return
    if (key === undefined) {
      return selectedSubjects.forEach(subject => removeSubject(subject.id))
    }

    if (key instanceof Set) {
      const addedSubjects = new Set(schedules.filter(schedule => key.has(schedule.id) && !selectedSubjectsIds.has(schedule.id)))
      const removedSubjects = new Set(schedules.filter(schedule => !key.has(schedule.id) && selectedSubjectsIds.has(schedule.id)))

      addedSubjects.forEach(subject => addSubject(subject))
      removedSubjects.forEach(subject => removeSubject(subject.id))
    }
  }, [addSubject, removeSubject, schedules, selectedSubjects, selectedSubjectsIds])

  // Memoize disabled keys to avoid re-renders
  const disabledKeys = useMemo(() => {
    return schedules.filter(
      schedule => selectedSubjects.some(
        selected => selected.code === schedule.code && selected.group !== schedule.group
      )
    ).map(item => item.id)
  }, [schedules, selectedSubjects])

  // Pagination
  const [page, setPage] = useState(1)
  const rowsPerPage = 5
  const pages = Math.ceil(schedules.length / rowsPerPage)

  const items = useMemo(() => {
    // return schedules
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    return schedules.slice(start, end)
  }, [page, schedules, rowsPerPage])

  return (
    <Table
      isVirtualized
      isHeaderSticky
      aria-label="Tabla de horarios"
      selectionMode="multiple"
      selectionBehavior="toggle"
      onSelectionChange={handleSelectionChange}
      selectedKeys={selectedSubjectsIds}
      disabledKeys={disabledKeys}
      classNames={{ base: "max-h-[80vh]" }}
      bottomContent={
        items.length > 0 && <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow

            color="primary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner label="Buscando en TEC Digital" />}
        items={items}
        emptyContent="No hay horarios disponibles"
      >
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
            <TableCell>{item.typeOfGroup}</TableCell>
            {/* <TableCell>{item.typeOfSubject}</TableCell> */}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
