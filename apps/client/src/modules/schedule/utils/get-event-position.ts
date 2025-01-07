import { ScheduleEvent } from "@/modules/schedule/interfaces/courses-schedule"

export const getEventPosition = (event: ScheduleEvent, overlappingEvents: number, eventIndex: number) => {
  const [startHour, startMinute] = event.start.split(":").map(Number)
  const [endHour, endMinute] = event.end.split(":").map(Number)

  const startPosition = (startHour - 7) * 60 + startMinute
  const endPosition = (endHour - 7) * 60 + endMinute

  const totalHeight = 13 * 50
  const totalMinutes = 13 * 60

  const topPixels = (startPosition / totalMinutes) * totalHeight
  const topPercentage = startMinute / 60 * 100
  const heightPixels = ((endPosition - startPosition) / totalMinutes) * totalHeight

  const width = 100 / overlappingEvents
  const left = width * eventIndex

  const spacing = 2

  console.log(startHour, startMinute, endHour, endMinute)
  console.log(startPosition, endPosition, totalMinutes)
  console.log(topPixels, heightPixels)

  const baseStyle = {
    top: `${topPercentage}%`,
    height: `${heightPixels}px`,
    left: `${left + spacing}%`,
    width: `${width - (spacing * 2)}%`,
    position: "absolute" as const,
  }

  const style = overlappingEvents > 1 ? {
    ...baseStyle,
    backgroundColor: "hsl(var(--nextui-danger))",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  } : baseStyle

  return style
}