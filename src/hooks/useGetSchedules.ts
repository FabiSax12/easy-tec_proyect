"use client"
import { useState } from "react"
import { getSchedules as getSchedulesServer } from "@/actions"
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
      const schedules = await getSchedulesServer(campus, carrier, period)
      setSchedules(schedules)
    } catch {
      setSchedules([])
    } finally {
      setIsLoading(false)
    }
  }

  return { schedules, isLoading, getSchedules, setCampus, setCarrier, setPeriod, carrier, campus, period }
}