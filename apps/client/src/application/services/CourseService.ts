import { Course, CreateCourseDto, UpdateCourseDto } from "@/domain/entities/Course"
import { CourseRepository } from "@/domain/repositories/CourseRepository"

export const createCourseService = (courseRepository: CourseRepository) => ({
  async createCourse(courseData: CreateCourseDto): Promise<Course> {
    return await courseRepository.createCourse(courseData)
  },

  async getCourses(): Promise<Course[]> {
    return await courseRepository.getCourses()
  },

  async getCourseById(courseId: number): Promise<Course> {
    return await courseRepository.getCourseById(courseId)
  },

  async updateCourse(courseId: number, updates: UpdateCourseDto): Promise<Course> {
    return await courseRepository.updateCourse(courseId, updates)
  },

  async deleteCourse(courseId: number): Promise<Course> {
    return await courseRepository.deleteCourse(courseId)
  },

  // Joins
  async getUserCourses(userId: number): Promise<Course[]> {
    return await courseRepository.getByUserId(userId)
  },

  async getCoursesByPeriodId(periodId: number): Promise<Course[]> {
    return await courseRepository.getByPeriodId(periodId)
  }
})
