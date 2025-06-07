import { forwardRef, useMemo } from "react"
import { ScheduleEvent } from "@/interfaces/courses-schedule"
import { getEventsForTimeSlot } from "@/utils/get-events-for-time-slot"
import { HOURS_COUNT, HOURS_START, CELL_HEIGHT } from "@/utils/get-event-position"
import { CoursesScheduleEvent } from "./CoursesScheduleEvent"
import { ScheduleHeader } from "./ScheduleHeader"

interface Props {
  theme?: "light" | "dark"
  events: ScheduleEvent[]
  eventsDeleteable?: boolean
  eventsEditable?: boolean
}

export const ScheduleView = forwardRef(({ events, eventsDeleteable = true, eventsEditable = false, theme }: Props, ref: React.Ref<HTMLDivElement>) => {
  const hours = useMemo(() => Array.from({ length: HOURS_COUNT }, (_, i) => `${HOURS_START + i}:00`), [])
  const days = useMemo(() => ["Lun", "Mar", "Mie", "Jue", "Vie"], [])

  return <div
    ref={ref}
    className={`${theme} grid grid-cols-0.5-5 col1text-sm h-[850px] w-[900px] rounded-lg border border-divider bg-content1 shadow-lg`}
    style={{
      height: CELL_HEIGHT * (HOURS_COUNT + 1),
    }}
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
                isEditable={eventsEditable}
                isDeleteable={eventsDeleteable}
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
})
