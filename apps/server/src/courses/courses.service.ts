import { Injectable, NotFoundException } from "@nestjs/common"
import { Course } from "@prisma/client"
import { CreateCourseDto } from "./dto/create-course.dto"
import { UpdateCourseDto } from "./dto/update-course.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class CoursesService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    try {
      const createdCourse = await this.prismaService.course.create({
        data: createCourseDto,
      })
      return createdCourse
    } catch (error) {
      throw new Error("Error creating course")
    }
  }

  async findAll(): Promise<Course[]> {
    const courses = await this.prismaService.course.findMany()
    return courses
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.prismaService.course.findUnique({
      where: { id },
    })
    if (!course) throw new NotFoundException("Course not found")
    return course
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const updatedCourse = await this.prismaService.course.update({
      where: { id },
      data: updateCourseDto,
    })
    return updatedCourse
  }

  async remove(id: number): Promise<Course> {
    const deletedCourse = await this.prismaService.course.delete({
      where: { id },
    })
    return deletedCourse
  }

  async findCourses({
    userId,
    periodCode,
    periodId,
  }: {
    userId?: number
    periodCode?: string
    periodId?: number
  }): Promise<Course[]> {
    let whereClause = {}

    if (userId) {
      const user = await this.prismaService.user.findUnique({
        where: { id: userId },
        select: { periods: true },
      })

      if (!user) throw new NotFoundException("User not found")

      whereClause = { ...whereClause, periodId: { in: user.periods.map(p => p.id) } }
    }

    if (periodCode) {
      whereClause = { ...whereClause, periodCode }
    }

    if (periodId) {
      whereClause = { ...whereClause, periodId }
    }

    const courses = await this.prismaService.course.findMany({
      where: whereClause,
    })

    return courses
  }
}
