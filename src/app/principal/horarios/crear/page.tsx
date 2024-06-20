"use client"
import { useState } from "react"
import { NextPage } from "next"
import { useGetSchedules } from "@/hooks/useGetSchedules"
import { ScheduleRow } from "@/interfaces/api-data/schedule"
import { SectionCard, Spinner, ScheduleBoard, SchedulesSelector, SchedulesTable } from "@/components"

interface Props { }

const CreateSchedulePage: NextPage<Props> = ({ }) => {
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

      <div className="w-full flex flex-col lg:h-[80vh] lg:flex-row gap-6">
        <div className="flex-1">
          {isLoading
            ? <Spinner />
            : <SchedulesTable
              schedules={schedules}
              selectedSubjects={selectedSubjects}
              setSelectedSubjects={setSelectedSubjects}
            />
          }
        </div>
        <SectionCard className="flex-1 overflow-y-scroll">
          <ScheduleBoard selectedSubjects={selectedSubjects} />
        </SectionCard>
      </div>
    </section>
  )
}

export default CreateSchedulePage