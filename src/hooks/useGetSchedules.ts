import { useState } from "react"
import { ScheduleRow } from "@/interfaces/api-data/schedule"

export const useGetSchedules = () => {
  const [campus, setCampus] = useState<string | null>(null)
  const [carrier, setCarrier] = useState<string | null>(null)
  const [period, setPeriod] = useState<string | null>(null)
  const [schedules, setSchedules] = useState<ScheduleRow[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getSchedules = async () => {
    if (!campus || !carrier || !period) return

    setIsLoading(true)
    try {
      const res = await fetch(`/api/schedule?campus=${campus}&carrier=${carrier}&period=${period}`, { cache: "no-cache" })
      const { data }: { data: ScheduleRow[] } = await res.json()
      setSchedules(data)
    } catch {
      setSchedules([])
    } finally {
      setIsLoading(false)
    }
  }

  return { schedules, isLoading, getSchedules, setCampus, setCarrier, setPeriod, carrier, campus, period }
}