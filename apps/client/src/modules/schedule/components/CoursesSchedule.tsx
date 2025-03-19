import { useMemo, useRef } from "react"
import { useSchedule } from "@/modules/schedule/hooks/useSchedules"
import { ScheduleEvent } from "@/modules/schedule/interfaces/courses-schedule"
import { getEventPosition } from "@/modules/schedule/utils/get-event-position"
import { getOverlappingEvents } from "@/modules/schedule/utils/get-overlaping-events"
import { CoursesScheduleEvent } from "./CoursesScheduleEvent"
import { toPng } from "html-to-image"
import { Button } from "@heroui/react"

const HOURS_START = 7
const HOURS_COUNT = 16
const CELL_HEIGHT = 50

const ScheduleHeader = ({ days }: { days: string[] }) => (
  <>
    <div className="p-3 font-bold text-center bg-default-100 rounded-tl-lg"></div>
    {days.map((day) => (
      <div key={day} className="p-3 font-bold text-center bg-default-100 border-l border-divider">
        {day}
      </div>
    ))}
  </>
)

const getEventsForTimeSlot = (events: ScheduleEvent[], day: string, hour: number): ({
  event: ScheduleEvent;
  style: React.CSSProperties;
} | null)[] => {
  return events
    .filter((event) => event.day === day)
    .map((event) => {
      const [eventHour] = event.start.split(":").map(Number)
      if (eventHour === hour) {
        const overlappingEvents = getOverlappingEvents(events, event)
        const eventIndex = overlappingEvents.indexOf(event)
        return {
          event,
          style: getEventPosition(event, overlappingEvents.length, eventIndex)
        }
      }
      return null
    })
    .filter(Boolean)
}

const CoursesSchedule = () => {
  const { selectedSubjects } = useSchedule()
  const scheduleRef = useRef<HTMLDivElement>(null)

  const hours = useMemo(() => Array.from({ length: HOURS_COUNT }, (_, i) => `${HOURS_START + i}:00`), [])
  const days = useMemo(() => ["Lun", "Mar", "Mie", "Jue", "Vie"], [])

  const events = useMemo(() => {
    const newEvents: ScheduleEvent[] = []

    selectedSubjects.forEach((subject) => {
      subject.schedules.forEach((schedule) => {
        if (!days.includes(schedule.day)) return

        newEvents.push({
          title: subject.subject,
          location: subject.classroom,
          day: schedule.day,
          start: schedule.start,
          end: schedule.end,
        })
      })
    })

    return newEvents
  }, [selectedSubjects, days])

  const handleDownloadImage = () => {
    if (scheduleRef.current) {
      toPng(scheduleRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a")
          link.download = "horario.png"
          link.href = dataUrl
          link.click()
        })
        .catch((error) => {
          console.error("Error al generar la imagen:", error)
        })
    }
  }

  return (
    <div>
      <div className="text-right mb-4">
        <Button
          onClick={handleDownloadImage}
          color="primary"
          size="md"
        >
          Descargar Horario
        </Button>
      </div>
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
