"use client"
import { ScheduleContextProvider } from "@/context/ScheduleContext"
import { useGetSchedules } from "@/hooks/useGetSchedules"
import { Spinner } from "@/components/nextui"
import { SchedulesTable, SchedulesSelector } from "@/components/schedule"

export default function SchedulesPage() {
  const { getSchedules, isLoading, schedules, setCampus, setCarrier, setPeriod, campus } = useGetSchedules()

  return <ScheduleContextProvider>
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
          : <SchedulesTable schedules={schedules} />
        }
      </div>
    </section>
  </ScheduleContextProvider>
}
