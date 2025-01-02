import apiClient from "@/config/apiClient"
import { Course, CreateCourseDto, UpdateCourseDto } from "@/domain/entities/Course"
import { CourseRepository } from "@/domain/repositories/CourseRepository"
import { ErrorHandler } from "@/application/utils/ErrorHandler"

export const courseApiRepository: CourseRepository = {
  async getCourses(): Promise<Course[]> {
    try {
      const response = await apiClient.get("/courses")
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getCourseById(id: number): Promise<Course> {
    try {
      const response = await apiClient.get(`/courses/${id}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getByUserId(userId: number): Promise<Course[]> {
    try {
      const response = await apiClient.get(`/users/${userId}/courses`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getByPeriodId(periodId: number): Promise<Course[]> {
    try {
      const response = await apiClient.get(`/periods/${periodId}/courses`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async createCourse(course: CreateCourseDto): Promise<Course> {
    try {
      const response = await apiClient.post("/courses", course)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async updateCourse(courseId: number, course: UpdateCourseDto): Promise<Course> {
    try {
      const response = await apiClient.patch(`/courses/${courseId}`, course)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async deleteCourse(courseId: number): Promise<Course> {
    try {
      const response = await apiClient.delete(`/courses/${courseId}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  }
}