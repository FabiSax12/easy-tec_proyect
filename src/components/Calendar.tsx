import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {Draggable, DropArg} from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import { NextPage } from 'next'

interface eventInfo {
  timeText: String
  event: {title: String}
}

const events = [
  { title: 'Meeting', start: new Date().getDate() }
]

interface Props {}

const Calendar: NextPage<Props> = ({}) => {
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

function renderEventContent(eventInfo: eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Calendar