import { useContext } from "react"
import { ScheduleContext } from "@/schedule/context/schedule"

export const useSchedule = () => {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error("useScheduleContext must be used within a ScheduleContextProvider")
  }
  return context
}