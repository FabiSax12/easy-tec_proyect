"use server"

import { ScheduleRow } from "@/interfaces/api-data/schedule"
import { getSchedule } from "@/libs/scrapping/schedules-scrapping"
import { cache } from "react"

export const getSchedules = cache(async (campus: string, carrier: string, period: string) => {
  const schedule = await getSchedule(
    campus,
    carrier,
    period,
    {
      email: process.env.TEC_EMAIL,
      password: process.env.TEC_PASSWORD
    }
  )
  return schedule as ScheduleRow[]
})
