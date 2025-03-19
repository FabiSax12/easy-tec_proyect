import { ScheduleEvent } from "@/interfaces/courses-schedule"

export const getOverlappingEvents = (events: ScheduleEvent[], currentEvent: ScheduleEvent) => {
  return events.filter(event => {
    if (event.day !== currentEvent.day) return false

    const [currentStartHour, currentStartMinute] = currentEvent.start.split(":").map(Number)
    const [currentEndHour, currentEndMinute] = currentEvent.end.split(":").map(Number)
    const [eventStartHour, eventStartMinute] = event.start.split(":").map(Number)
    const [eventEndHour, eventEndMinute] = event.end.split(":").map(Number)

    const currentStartTime = currentStartHour * 60 + currentStartMinute
    const currentEndTime = currentEndHour * 60 + currentEndMinute
    const eventStartTime = eventStartHour * 60 + eventStartMinute
    const eventEndTime = eventEndHour * 60 + eventEndMinute

    return (
      (eventStartTime >= currentStartTime && eventStartTime < currentEndTime) ||
      (eventEndTime > currentStartTime && eventEndTime <= currentEndTime) ||
      (eventStartTime <= currentStartTime && eventEndTime >= currentEndTime)
    )
  })
}