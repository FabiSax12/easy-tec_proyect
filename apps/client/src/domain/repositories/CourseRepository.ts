import { Course, CreateCourseDto, UpdateCourseDto } from "../entities/Course"

export interface CourseRepository {
  getCourses(): Promise<Course[]>
  getCourseById(id: number): Promise<Course>
  getByUserId(userId: number): Promise<Course[]>
  getByPeriodId(periodId: number): Promise<Course[]>

  createCourse(course: CreateCourseDto): Promise<Course>
  updateCourse(courseId: number, course: UpdateCourseDto): Promise<Course>
  deleteCourse(courseId: number): Promise<Course>
}