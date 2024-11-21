import { Course } from "@/shared/interfaces"

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