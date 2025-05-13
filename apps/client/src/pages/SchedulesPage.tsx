import { useState } from "react"
import { campusOptions, carriersOptions, periodsOptions, subjectsOptions } from "@/modules/schedule/data/schedule-options"
import { SchedulesProvider } from "@/modules/schedule/context/schedule"
import { SchedulesTable } from "@/modules/schedule/components"
import { SectionCard, ValidatedSelect as Select } from "@/shared/components"
import { Button, Spinner } from "@easy-tec/ui"
import { BiSearchAlt } from "react-icons/bi"
import CoursesSchedule from "@/modules/schedule/components/CoursesSchedule"
import { axiosClient } from "@/api/axios.config"

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

type CarrierOption = typeof carriersOptions[keyof typeof carriersOptions]
type SubjectOption = typeof subjectsOptions[keyof typeof subjectsOptions]

export const SchedulesPage = () => {
  const [campus, setCampus] = useState<string | null>(null)
  const [carrier, setCarrier] = useState<string | null>(null)
  const [period, setPeriod] = useState<string | null>(null)
  const [schedules, setSchedules] = useState<ScheduleRow[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getSchedules = async () => {
    if (!campus || !carrier || !period) return

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
    <SchedulesProvider>
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
          <Button onClick={getSchedules} color="primary" isIconOnly endContent={<BiSearchAlt />} />
        </SectionCard>
        <div className="w-full flex flex-col lg:h-[80vh] lg:flex-row gap-6">
          <div className="flex-1">
            {isLoading
              ? <Spinner />
              : <SchedulesTable schedules={schedules} />
            }
          </div>
          <SectionCard className="flex-1 overflow-y-scroll">
            {/* <ScheduleBoard /> */}
            <CoursesSchedule />
          </SectionCard>
        </div>
      </section>
    </SchedulesProvider>
  )
}