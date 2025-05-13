import { axiosClient } from "@/api/axios.config"
import { Course, CreateCourseDto } from "@/shared/types/entities/Course"

export async function createUserCourse(data: Omit<Course, "id">): Promise<Course> {
  try {
    const response = await axiosClient.post<Course>("/api/courses", data)
    return response.data
  } catch (error) {
    console.error("Error posting user course", error)
    throw new Error("Error posting user course")
  }
}

export async function getUserCourses(): Promise<Course[]> {
  try {
    const response = await axiosClient.get<Course[]>("/api/courses", {
      params: { filterByUser: true }
    })
    return response.data
  } catch (error) {
    console.error("Error fetching user courses", error)
    throw new Error("Error fetching user courses")
  }
}

export async function getUserCoursesByPeriodId(periodId: string): Promise<Course[]> {
  try {
    const response = await axiosClient.get<Course[]>("/api/courses", {
      params: { filterByUser: true, period: periodId },
    })
    return response.data
  } catch (error) {
    console.error("Error getting user courses by period", error)
    throw new Error("Error getting user courses by period")
  }
}

export async function getCoursesByPeriodId(periodId: number): Promise<Course[]> {
  try {
    const response = await axiosClient.get<Course[]>("/api/courses", {
      params: { periodId },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching courses by period", error)
    throw new Error("Error fetching courses by period")
  }
}

export async function updateCourse(courseId: number, newData: CreateCourseDto): Promise<Course> {
  try {
    const response = await axiosClient.patch<Course>(`/api/courses/${courseId}`, newData)
    return response.data
  } catch (error) {
    console.error("Error updating user course", error)
    throw new Error("Error updating user course")
  }
}

export async function deleteCourse(courseId: string | number) {
  try {
    const res = await axiosClient.delete(`/api/courses/${courseId}`)
    return res.data as Course
  } catch (error) {
    console.error("Failed to delete course", error)
    throw new Error("Failed to delete course")
  }
}
