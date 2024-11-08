import { useEffect, useState } from "react"
import { useSchedule } from "@/hooks"
import dayjs from "dayjs"
import { Calendar, Components, Event, Formats, dayjsLocalizer } from "react-big-calendar"
import "dayjs/locale/es"
import "react-big-calendar/lib/css/react-big-calendar.css"

dayjs.locale("es")

interface EventItem extends Event {
  data: {
    teacher: string
    classroom: string
  }
}

const components: Components<EventItem, object> = {
  work_week: {
    header: (props) => {
      return <div>{props.label.toLocaleUpperCase()}</div>
    },

    event: ({ event }) => {
      return (
        <div className="h-full text-xs relative">
          <p>{event.title}</p>
          <span className="absolute right-0 bottom-0">{event.data.classroom}</span>
        </div>
      )
    }
  }
}

interface Props {
  classname?: string
}

export const ScheduleBoard = ({ classname }: Props) => {
  const { selectedSubjects } = useSchedule()
  const [events, setEvents] = useState<EventItem[]>([])
  const localizer = dayjsLocalizer(dayjs)

  useEffect(() => {
    const newEvents: EventItem[] = []

    selectedSubjects.forEach(subject => {
      subject.schedules.forEach(schedule => {
        const daysOfWeek = ["Lun", "Mar", "Mie", "Jue", "Vie"]
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

    setEvents(newEvents)
  }, [selectedSubjects])

  const formats: Formats = {
    dayFormat: "dddd"
  }

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
        enableAutoScroll
      />
    </div>
  )
}