import { useState } from "react"
import { campusOptions, carriersOptions, periodsOptions, subjectsOptions } from "@/data/schedule-options"
import { SchedulesTable } from "@/components/SchedulesTable"
import { SectionCard, ValidatedSelect as Select } from "@/components/ui"
import { Button, Switch } from "@heroui/react"
import { axiosClient } from "@/api/axios.config"
import { BiSearchAlt } from "react-icons/bi"
import { ScheduleRow } from "@/interfaces/courses-schedule"
import { ManualScheduleView } from "@/components/schedule-views/ManualScheduleView"

type CarrierOption = typeof carriersOptions[keyof typeof carriersOptions]
type SubjectOption = typeof subjectsOptions[keyof typeof subjectsOptions]

export const SchedulesPage = () => {
  const [campus, setCampus] = useState<string | null>(null)
  const [carrier, setCarrier] = useState<string | null>(null)
  const [period, setPeriod] = useState<string | null>(null)
  const [schedules, setSchedules] = useState<ScheduleRow[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isRowLayout, setIsRowLayout] = useState(true)

  const getSchedules = async () => {
    if (!campus || !carrier || !period) return

    setSchedules([])
    setIsLoading(true)
    try {
      const res = await axiosClient.get<ScheduleRow[]>(`/api/schedules?campus=${campus}&carrier=${carrier}&period=${period}`)
      const data = res.data
      if (data) setSchedules(data)
    } catch {
      setSchedules([])
    } finally {
      setIsLoading(false)
    }
  }

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
        <Button onPress={getSchedules} color="primary" isIconOnly endContent={<BiSearchAlt />} />
        <Switch isSelected={isRowLayout} onValueChange={setIsRowLayout} className="hidden xl:block">
          {isRowLayout ? "Horizontal" : "Vertical"}
        </Switch>
      </SectionCard>

      <div
        className={`
          w-full flex flex-col gap-6
          ${isRowLayout ? "xl:flex-row xl:h-[80vh]" : "xl:flex-col"}
        `}
      >
        <div className="flex-1">
          <SchedulesTable schedules={schedules} isLoading={isLoading} />
        </div>
        <SectionCard
          className={`
            flex-1
            ${isRowLayout ? "overflow-y-scroll" : "h-full sm:px-10 md:px-20 lg:px-32 xl:px-56"}
          `}
        >
          <ManualScheduleView />
        </SectionCard>
      </div>
    </section >
  )
}
