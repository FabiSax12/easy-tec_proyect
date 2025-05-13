import { ScheduleEvent } from "@/interfaces/courses-schedule"

export const HOURS_START = 7
export const HOURS_COUNT = 16
export const CELL_HEIGHT = 50

export const getEventPosition = (event: ScheduleEvent, overlappingEvents: number, eventIndex: number) => {
  const [startHour, startMinute] = event.start.split(":").map(Number)
  const [endHour, endMinute] = event.end.split(":").map(Number)

  const startPosition = (startHour - HOURS_START) * 60 + startMinute
  const endPosition = (endHour - HOURS_START) * 60 + endMinute

  const totalHeight = 13 * CELL_HEIGHT
  const totalMinutes = 13 * 60

  const topPercentage = startMinute / 60 * 100
  const heightPixels = ((endPosition - startPosition) / totalMinutes) * totalHeight

  const width = 100 / overlappingEvents
  const left = width * eventIndex

  const spacing = 2

  const baseStyle = {
    top: `${topPercentage}%`,
    height: `${heightPixels}px`,
    left: `${left + spacing}%`,
    width: `${width - (spacing * 2)}%`,
    position: "absolute" as const,
  }

  const style = overlappingEvents > 1 ? {
    ...baseStyle,
    backgroundColor: "hsl(var(--heroui-danger))",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  } : baseStyle

  return style
}