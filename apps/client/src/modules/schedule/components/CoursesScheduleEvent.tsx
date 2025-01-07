import { ScheduleEvent } from "@/modules/schedule/interfaces/courses-schedule"
import { IoLocationOutline } from "react-icons/io5"

interface Props {
  event: ScheduleEvent;
  style: React.CSSProperties;
}

export const CoursesScheduleEvent = ({ event, style }: Props) => {
  return (
    <div
      className="absolute bg-primary text-primary-foreground text-xs p-2 rounded-md overflow-hidden z-50 shadow-md hover:scale-[1.02] transition-transform"
      style={style}
    >
      <p className="font-semibold">{event.title}</p>
      {event.location && (
        <p className="text-[10px] text-primary-foreground/80 truncate mt-1.5 flex items-center gap-1">
          {/* <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg> */}
          <IoLocationOutline size={15} />
          {event.location}
        </p>
      )}
    </div>
  )
}