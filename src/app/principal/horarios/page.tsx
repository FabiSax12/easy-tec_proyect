"use client"
import { useState } from "react"
import { useGetSchedules } from "@/hooks/useGetSchedules"
import { Spinner } from "@/components"
import { ScheduleRow } from "@/interfaces/api-data/schedule"
import { SchedulesTable } from "@/components/schedule/SchedulesTable"
import { SchedulesSelector } from "@/components/schedule/SchedulesSelector"

export default function SchedulesPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<ScheduleRow[]>([])
  const { getSchedules, isLoading, schedules, setCampus, setCarrier, setPeriod, campus } = useGetSchedules()

  return (
    <section className="flex flex-col gap-5">
      <SchedulesSelector
        campus={campus}
        getSchedules={getSchedules}
        setCampus={setCampus}
        setCarrier={setCarrier}
        setPeriod={setPeriod}
      />
      <div>
        {isLoading
          ? <Spinner />
          : <SchedulesTable
            schedules={schedules}
            selectedSubjects={selectedSubjects}
            setSelectedSubjects={setSelectedSubjects}
          />
        }
      </div>
    </section>
  )
}
