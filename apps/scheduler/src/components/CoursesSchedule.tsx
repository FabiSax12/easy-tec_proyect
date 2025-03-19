import { useMemo, useRef } from "react"
import { useSchedule } from "@/hooks/useSchedules"
import { ScheduleEvent } from "@/interfaces/courses-schedule"
import { getEventsForTimeSlot } from "@/utils/get-events-for-time-slot"
import { CoursesScheduleEvent } from "./CoursesScheduleEvent"
import { ScheduleHeader } from "./ScheduleHeader"

const HOURS_START = 7
const HOURS_COUNT = 16
const CELL_HEIGHT = 50

interface Props {
  defaultEvents?: ScheduleEvent[]
  eventsDeleteable?: boolean
}

const CoursesSchedule = ({ defaultEvents, eventsDeleteable = true }: Props) => {
  const { selectedSubjects } = useSchedule()
  console.log("Selected subjects", selectedSubjects)
  const scheduleRef = useRef<HTMLDivElement>(null)

  const hours = useMemo(() => Array.from({ length: HOURS_COUNT }, (_, i) => `${HOURS_START + i}:00`), [])
  const days = useMemo(() => ["Lun", "Mar", "Mie", "Jue", "Vie"], [])

  const events = useMemo(() => {
    if (defaultEvents) return defaultEvents

    console.log("Rendering events")

    const newEvents: ScheduleEvent[] = []

    selectedSubjects.forEach((subject) => {
      subject.schedules.forEach((schedule) => {
        if (!days.includes(schedule.day)) return

        newEvents.push({
          id: subject.id,
          title: subject.subject,
          location: subject.classroom,
          day: schedule.day,
          start: schedule.start,
          end: schedule.end,
          group: subject.group,
          color: subject.color
        })
      })
    })

    return newEvents
  }, [selectedSubjects, days, defaultEvents])

  console.log(events)

  return (
    <div className="w-full">
      <div
        ref={scheduleRef}
        className="grid grid-cols-6 text-sm h-[850px] rounded-lg border border-divider bg-content1 shadow-lg"
      >
        <ScheduleHeader days={days} />

        {hours.map((hour, hourIndex) => (
          <div key={`row-${hourIndex}`} className="contents">
            <div className="p-3 text-right bg-default-50 text-foreground-500 text-xs font-medium border-t border-divider" style={{ height: CELL_HEIGHT }}>
              {hour}
            </div>

            {days.map((day) => (
              <div
                key={`${day}-${hour}`}
                className="relative border-t border-l border-divider hover:bg-default-50 transition-colors"
                style={{ height: CELL_HEIGHT }}
              >
                {getEventsForTimeSlot(events, day, parseInt(hour)).map((course, idx) => {
                  if (!course) return null

                  return <CoursesScheduleEvent
                    isDeleteable={eventsDeleteable}
                    isEditable={eventsDeleteable}
                    key={`${course.event.title}-${idx}`}
                    event={course.event}
                    style={course.style}
                  />
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesSchedule
