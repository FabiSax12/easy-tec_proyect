import { ScheduleEvent } from "@/interfaces/courses-schedule";
import { getEventPosition } from "./get-event-position";
import { getOverlappingEvents } from "./get-overlaping-events";

export const getEventsForTimeSlot = (events: ScheduleEvent[], day: string, hour: number): ({
  event: ScheduleEvent;
  style: React.CSSProperties;
} | null)[] => {
  return events
    .filter((event) => event.day.toLowerCase() === day.toLowerCase())
    .map((event) => {
      const [eventHour] = event.start.split(":").map(Number)
      if (eventHour === hour) {
        const overlappingEvents = getOverlappingEvents(events, event)
        const eventIndex = overlappingEvents.indexOf(event)
        return {
          event,
          style: {
            backgroundColor: event.color || "#006fee",
            ...getEventPosition(event, overlappingEvents.length, eventIndex)
          }
        }
      }
      return null
    })
    .filter(Boolean)
}