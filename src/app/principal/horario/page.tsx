"use client"
import { useState } from "react"
import { campusOptions, carriersOptions, periodsOptions } from "@/data/schedule-options"
import { useGetSchedules } from "@/hooks/useGetSchedules"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react"
import { Select } from "@/components/nextui/Select"
import { SectionCard, Spinner } from "@/components"
import { BiSearchAlt } from "react-icons/bi"
import { ScheduleRow } from "@/interfaces/api-data/schedule"

const columns = [
  { key: "code", label: "CÓDIGO" },
  { key: "subject", label: "NOMBRE" },
  { key: "group", label: "GRUPO" },
  { key: "teacher", label: "PROFESOR" },
  { key: "schedule", label: "HORAS" },
  { key: "credits", label: "CREDITOS" },
]

export default function SchedulesPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<ScheduleRow[]>([])
  const { getSchedules, isLoading, schedules, setCampus, setCarrier, setPeriod, campus } = useGetSchedules()
  console.log(selectedSubjects)

  return (
    <section className="flex flex-col gap-5">
      <SectionCard className="w-full flex flex-wrap justify-center items-center gap-2">
        <div className="flex-1 flex flex-wrap justify-evenly gap-2">
          <Select
            label="Sede"
            errorMessage="Debe seleccionar una sede"
            options={campusOptions.map((campus) => ({ key: campus.code, label: campus.name }))}
            size="sm"
            onValueChange={setCampus}
          />
          <Select
            label="Escuela"
            errorMessage="Debe seleccionar una escuela"
            options={
              Object.values(carriersOptions).filter(
                carrier => campusOptions.find(campusOption => campusOption.code === campus)?.carriers.includes(carrier)
              ).map(carrier => ({ key: carrier.code, label: carrier.name }))
            }
            size="sm"
            onValueChange={setCarrier}
          />
          <Select
            label="Periodo Académico"
            errorMessage="Debe seleccionar un periodo académico"
            options={periodsOptions.map((period) => ({ key: period.code, label: period.name }))}
            size="sm"
            onValueChange={setPeriod}
          />
        </div>
        <Button onClick={getSchedules} isIconOnly endContent={<BiSearchAlt />} className="" />
      </SectionCard>

      <div>
        {isLoading ? <Spinner /> : <Table
          aria-label="Tabla de horarios"
          selectionMode="multiple"
          selectionBehavior="toggle"
          selectedKeys={new Set(selectedSubjects.map(schedule => schedule.id))}
          onSelectionChange={
            key => setSelectedSubjects((prevState) => {
              if (key === "all") return prevState
              if (key === undefined) return []
              if (key instanceof Set) return schedules.filter(schedule => key.has(schedule.id))
              return prevState
            })
          }
          disabledKeys={
            new Set(
              schedules.filter(
                schedule => selectedSubjects.some(
                  selected => selected.code === schedule.code && selected.group !== schedule.group
                )
              ).map(
                item => item.id
              )
            )
          }
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
                <TableCell>{item.teacher}</TableCell>
                <TableCell>{item.schedule}</TableCell>
                <TableCell>{item.credits}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>}
      </div>
    </section>
  )
}
