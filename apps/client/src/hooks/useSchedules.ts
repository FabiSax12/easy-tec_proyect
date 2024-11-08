import { ScheduleContext } from "@/context/schedule"
import { useContext } from "react"

export const useSchedule = () => {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error("useScheduleContext must be used within a ScheduleContextProvider")
  }
  return context
}