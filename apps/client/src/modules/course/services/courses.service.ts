import { Course } from "@/shared/types/entities/Course"

export async function createUserCourse(data: Omit<Course, "id">) {
  const response = await fetch("/api/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (response.ok) return response.json()

  throw new Error("Error posting user course")
}

export async function getUserCourses(userId: number) {
  const response = await fetch(`/api/courses?user=${userId}`)
  return response.json()
}

export async function getUserCoursesByPeriodId(userId: number, periodId: string) {
  const res = await fetch(`/api/courses?user=${userId}&period=${periodId}`)
  const data = await res.json() as Course[]

  if (!res.ok) throw new Error("Error getting user courses")

  return data
}

export async function getCoursesByPeriodId(periodId: number) {
  const response = await fetch(`/api/courses?periodId=${periodId}`)
  return response.json()
}

export async function updateCourse(courseId: number, newData: Course) {
  const response = await fetch(`/api/courses/${courseId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newData)
  })

  if (response.ok) return response.json()

  throw new Error("Error updating user course")
}

export async function deleteCourse(courseId: string | number) {
  const response = await fetch(`/api/courses/${courseId}`, {
    method: "DELETE"
  })

  if (!response.ok) throw new Error("Failed to delete course")

  return response.json()
}