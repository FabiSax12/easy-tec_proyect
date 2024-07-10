"use client"
import { useGetSchedules } from "@/hooks"
import { ScheduleContextProvider } from "@/context/ScheduleContext"
import { SectionCard } from "@/components"
import { Spinner } from "@/components/nextui"
import { ScheduleBoard, SchedulesSelector, SchedulesTable } from "@/components/schedule"

const CreateSchedulePage = () => {
  const { getSchedules, isLoading, schedules, setCampus, setCarrier, setPeriod, campus } = useGetSchedules()

  return (
    <ScheduleContextProvider>
      <section className="flex flex-col gap-5">
        <SchedulesSelector
          campus={campus}
          getSchedules={getSchedules}
          setCampus={setCampus}
          setCarrier={setCarrier}
          setPeriod={setPeriod}
        />

        <div className="w-full flex flex-col lg:h-[80vh] lg:flex-row gap-6">
          <div className="flex-1">
            {isLoading
              ? <Spinner />
              : <SchedulesTable schedules={schedules} />
            }
          </div>
          <SectionCard className="flex-1 overflow-y-scroll">
            <ScheduleBoard />
          </SectionCard>
        </div>
      </section>
    </ScheduleContextProvider>
  )
}

export default CreateSchedulePage