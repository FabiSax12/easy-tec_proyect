import { useContext } from "react"
import { ScheduleContext } from "@/context/schedule"

export const useSchedule = () => {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error("useSchedule must be used within a SchedulesProvider")
  }
  return context
}