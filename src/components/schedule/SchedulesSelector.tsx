"use client"
import { Dispatch, SetStateAction } from "react"
import { campusOptions, carriersOptions, subjectsOptions, periodsOptions } from "@/data/schedule-options"
import { Button } from "@nextui-org/react"
import { Select } from "@/components/nextui/Select"
import { SectionCard } from "@/components"
import { BiSearchAlt } from "react-icons/bi"

// Define the types to the options
type CarrierOption = typeof carriersOptions[keyof typeof carriersOptions]
type SubjectOption = typeof subjectsOptions[keyof typeof subjectsOptions]

interface Props {
  campus: string | null
  setCampus: Dispatch<SetStateAction<string | null>>
  setCarrier: Dispatch<SetStateAction<string | null>>
  setPeriod: Dispatch<SetStateAction<string | null>>
  getSchedules: () => Promise<void>
}

export const SchedulesSelector = ({ setCampus, setCarrier, setPeriod, getSchedules, campus }: Props) => {

  const getCarriersAndSubjects = (codes: string[], options: Record<string, CarrierOption | SubjectOption>) => {
    return codes
      .map(code => options[code])
      .filter(Boolean)
      .map(option => ({ key: option.code, label: option.name }))
  }

  const schoolsOptions = () => {
    const campusData = campusOptions.find(campusOption => campusOption.code === campus)
    if (!campusData) return []

    const carriers = getCarriersAndSubjects(campusData.carriers, carriersOptions)
    const subjects = getCarriersAndSubjects(campusData.subjects, subjectsOptions)

    return [...carriers, ...subjects]
  }

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
          options={schoolsOptions()}
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
