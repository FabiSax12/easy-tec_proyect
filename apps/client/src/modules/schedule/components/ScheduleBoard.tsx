import { useMemo, memo } from "react"
import dayjs from "dayjs"
import { useSchedule } from "@/modules/schedule/hooks/useSchedules"
import { Calendar, Components, Event, Formats, dayjsLocalizer } from "react-big-calendar"
import "dayjs/locale/es"
import "react-big-calendar/lib/css/react-big-calendar.css"

dayjs.locale("es")

interface EventItem extends Event {
  data: {
    teacher: string;
    classroom: string;
  };
}

const Header = memo(({ label }: { label: string }) => (
  <div>{label.toLocaleUpperCase()}</div>
))

const EventComponent = memo(({ event }: { event: EventItem }) => (
  <div className="h-full text-xs relative">
    <p>{event.title}</p>
    <span className="absolute right-0 bottom-0">{event.data.classroom}</span>
  </div>
))

const components: Components<EventItem, object> = {
  work_week: {
    header: Header,
    event: EventComponent,
  },
}

interface Props {
  classname?: string;
}

export const ScheduleBoard = ({ classname }: Props) => {
  const { selectedSubjects } = useSchedule()
  const localizer = dayjsLocalizer(dayjs)

  // Memorizar eventos para evitar cálculos innecesarios
  const events = useMemo(() => {
    const newEvents: EventItem[] = []
    const daysOfWeek = ["Lun", "Mar", "Mie", "Jue", "Vie"]

    selectedSubjects.forEach((subject) => {
      subject.schedules.forEach((schedule) => {
        const dayIndex = daysOfWeek.indexOf(schedule.day) + 1

        if (dayIndex === -1) return

        newEvents.push({
          title: subject.subject,
          start: dayjs(`2024-01-0${dayIndex}T${schedule.start}`).toDate(),
          end: dayjs(`2024-01-0${dayIndex}T${schedule.end}`).toDate(),
          data: {
            teacher: subject.teacher,
            classroom: subject.classroom
          }
        })
      })
    })

    return newEvents
  }, [selectedSubjects])

  // Formatos personalizados
  const formats: Formats = useMemo(
    () => ({
      dayFormat: "dddd",
    }),
    []
  )

  return (
    <div className={classname}>
      <Calendar
        localizer={localizer}
        events={events}
        view="work_week"
        views={["work_week"]}
        toolbar={false}
        date={dayjs("2024-01-01").toDate()}
        min={dayjs("2024-01-01T07:00:00").toDate()}
        max={dayjs("2024-01-01T20:00:00").toDate()}
        timeslots={11}
        step={5}
        components={components}
        formats={formats}
        scrollToTime={new Date(2024, 0, 1, 7)}
        eventPropGetter={() => ({
          className: "custom-event",
          style: { backgroundColor: "#f0f0f0" },
        })}
      />
    </div>
  )
}


