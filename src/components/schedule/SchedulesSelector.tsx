"use client"
import { Dispatch, SetStateAction } from "react"
import { campusOptions, carriersOptions, periodsOptions } from "@/data/schedule-options"
import { Button } from "@nextui-org/react"
import { Select } from "@/components/nextui/Select"
import { SectionCard } from "@/components"
import { BiSearchAlt } from "react-icons/bi"

interface Props {
  campus: string | null
  setCampus: Dispatch<SetStateAction<string | null>>
  setCarrier: Dispatch<SetStateAction<string | null>>
  setPeriod: Dispatch<SetStateAction<string | null>>
  getSchedules: () => Promise<void>
}
export const SchedulesSelector = ({ setCampus, setCarrier, setPeriod, getSchedules, campus }: Props) => {
  return (
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
      <Button onClick={getSchedules} color="primary" isIconOnly endContent={<BiSearchAlt />} />
    </SectionCard>
  )
}
