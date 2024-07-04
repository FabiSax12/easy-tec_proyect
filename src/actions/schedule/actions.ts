"use server"

import { getSchedule } from "@/libs/scrapping/schedules-scrapping"

export async function getSchedules(campus: string, carrier: string, period: string) {
  const schedule = await getSchedule(
    campus,
    carrier,
    period,
    {
      email: process.env.TEC_EMAIL,
      password: process.env.TEC_PASSWORD
    }
  )
  return schedule
}
