"use client"
import { useState } from "react"
import { useGetSchedules } from "@/hooks/useGetSchedules"
import { ScheduleRow } from "@/interfaces/api-data/schedule"
import { Spinner } from "@/components/nextui"
import { SchedulesTable, SchedulesSelector } from "@/components/schedule"

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
