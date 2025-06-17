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
  visibleDays?: string[]
}

export const ScheduleView = forwardRef(({
  events,
  eventsDeleteable = true,
  eventsEditable = false,
  theme,
  visibleDays
}: Props, ref: React.Ref<HTMLDivElement>) => {
  const hours = useMemo(() => Array.from({ length: HOURS_COUNT }, (_, i) => `${HOURS_START + i}:00`), [])

  // Usar visibleDays si se proporciona, de lo contrario usar todos los días
  const days = useMemo(() =>
    visibleDays || ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    [visibleDays]
  )

  // Generar la clase de grid dinámicamente basada en el número de días
  const gridColsClass = useMemo(() => {
    const dayCount = days.length
    // Crear una clase grid personalizada con template columns
    return `grid-cols-[auto_repeat(${dayCount},1fr)]`
  }, [days.length])

  // Calcular el ancho dinámicamente
  const scheduleWidth = useMemo(() => {
    const baseWidth = 120 // Ancho de la columna de horas
    const dayColumnWidth = 130 // Ancho aproximado por día
    return baseWidth + (days.length * dayColumnWidth)
  }, [days.length])

  console.log(events)

  return (
    <div
      ref={ref}
      className={`${theme} grid text-sm h-[850px] rounded-lg border border-divider bg-content1 shadow-lg ${gridColsClass}`}
      style={{
        height: CELL_HEIGHT * (HOURS_COUNT + 1),
        width: scheduleWidth,
        gridTemplateColumns: `auto repeat(${days.length}, 1fr)`
      }}
    >
      <ScheduleHeader days={days} />

      {hours.map((hour, hourIndex) => (
        <div key={`row-${hourIndex}`} className="contents">
          <div
            className="p-3 text-right bg-default-50 text-foreground-500 text-xs font-medium border-t border-divider"
            style={{ height: CELL_HEIGHT }}
          >
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

                return (
                  <CoursesScheduleEvent
                    showTeachers={false}
                    isEditable={eventsEditable}
                    isDeleteable={eventsDeleteable}
                    key={`${course.event.title}-${idx}`}
                    event={course.event}
                    style={course.style}
                  />
                )
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
})