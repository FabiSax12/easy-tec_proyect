"use server"

import db from "@/libs/db"

export async function getUserCourses(userId: number) {
  const periods = await db.academicPeriod.findMany({ where: { userId } })
  const periodIds = periods.map(period => period.id)
  const courses = await db.course.findMany({
    where: {
      academicPeriodId: {
        in: periodIds
      }
    }
  })

  return courses
}
