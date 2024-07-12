"use server"

import { Course } from "@/interfaces/db/creation-fields"
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

export async function addCourse(courseData: Course) {
  const course = await db.course.create({ data: courseData })
  return course
}

export async function deleteCourse(courseId: number | string) {
  if (typeof courseId === "string") {
    courseId = parseInt(courseId)
  }

  const course = await db.course.delete({ where: { id: courseId } })
  return course
}