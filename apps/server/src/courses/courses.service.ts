import { Injectable } from "@nestjs/common"
import { Course } from "@prisma/client"
import { CreateCourseDto } from "./dto/create-course.dto"
import { UpdateCourseDto } from "./dto/update-course.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class CoursesService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = await this.prismaService.course.create({
      data: createCourseDto
    })

    return createdCourse
  }

  async findAll(): Promise<Course[]> {
    const course = await this.prismaService.course.findMany()

    return course
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.prismaService.course.findUnique({
      where: { id }
    })

    return course
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const updatedCourse = await this.prismaService.course.update({
      where: { id },
      data: updateCourseDto
    })

    return updatedCourse
  }

  async remove(id: number): Promise<Course> {
    const deletedCourse = await this.prismaService.course.delete({
      where: { id }
    })

    return deletedCourse
  }

  async findByUser(userId: number): Promise<Course[]> {
    const { periods } = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { periods: true }
    })

    const course = await this.prismaService.course.findMany({
      where: { periodId: { in: periods.map(period => period.id) } }
    })

    return course
  }

  async findByPeriod(period: string): Promise<Course[]> {
    const course = await this.prismaService.course.findMany({
      where: { periodCode: period }
    })

    return course
  }

  async findByUserAndPeriod(userId: number, periodId: number): Promise<Course[]> {
    const course = await this.prismaService.course.findMany({
      where: {
        periodId: periodId
      }
    })

    return course
  }

  async findByPeriodId(periodId: number): Promise<Course[]> {
    const course = await this.prismaService.course.findMany({
      where: { periodId: periodId }
    })

    return course
  }
}
