"use client"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"

interface eventInfo {
  timeText: string
  event: { title: string }
}

const events = [
  { title: "Meeting", start: new Date().getDate() }
]

interface Props { }

export const Calendar = () => {
  return (
    <FullCalendar
      themeSystem=''
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "resourceTimelineWook, dayGridMonth, timeGridWeek"
      }}
      events={{}}
      selectable={true}
      editable={true}
      droppable={true}
      selectMirror={true}
    // dateClick={{}}
    // drop={}
    // eventClick={}
    />
  )
}

export function renderEventContent(eventInfo: eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}