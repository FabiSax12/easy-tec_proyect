import { Injectable } from "@nestjs/common"
import { Course } from "@prisma/client"
import { CreateCourseDto } from "./dto/create-course.dto"
import { UpdateCourseDto } from "./dto/update-course.dto"
import { PrismaService } from "src/prisma/prisma.service"
import { ResponseDto } from "src/types/shared/response.dto"

@Injectable()
export class CoursesService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createCourseDto: CreateCourseDto): Promise<ResponseDto<Course>> {
    const createdCourse = await this.prismaService.course.create({
      data: createCourseDto
    })

    return {
      statusCode: 201,
      message: "Course created successfully",
      data: createdCourse
    }
  }

  async findAll(): Promise<ResponseDto<Course[]>> {
    const course = await this.prismaService.course.findMany()

    return {
      statusCode: 200,
      message: "Courses retrieved successfully",
      data: course
    }
  }

  async findOne(id: number): Promise<ResponseDto<Course>> {
    const course = await this.prismaService.course.findUnique({
      where: { id }
    })

    return {
      statusCode: 200,
      message: "Course retrieved successfully",
      data: course
    }
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<ResponseDto<Course>> {
    const updatedCourse = await this.prismaService.course.update({
      where: { id },
      data: updateCourseDto
    })

    return {
      statusCode: 200,
      message: "Course updated successfully",
      data: updatedCourse
    }
  }

  async remove(id: number): Promise<ResponseDto<Course>> {
    const deletedCourse = await this.prismaService.course.delete({
      where: { id }
    })

    return {
      statusCode: 200,
      message: "Course deleted successfully",
      data: deletedCourse
    }
  }

  async findByUser(userId: number): Promise<ResponseDto<Course[]>> {
    const { academicPeriods } = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { academicPeriods: true }
    })

    const course = await this.prismaService.course.findMany({
      where: { academicPeriodId: { in: academicPeriods.map(ap => ap.id) } }
    })

    return {
      statusCode: 200,
      message: "Courses retrieved successfully",
      data: course
    }
  }

  async findByPeriod(period: string): Promise<ResponseDto<Course[]>> {
    const course = await this.prismaService.course.findMany({
      where: { period }
    })

    return {
      statusCode: 200,
      message: "Courses retrieved successfully",
      data: course
    }
  }

  async findByUserAndPeriod(userId: number, period: string): Promise<ResponseDto<Course[]>> {
    const { academicPeriods } = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { academicPeriods: true }
    })

    const course = await this.prismaService.course.findMany({
      where: {
        academicPeriodId: { in: academicPeriods.map(ap => ap.id) },
        period: period
      }
    })

    return {
      statusCode: 200,
      message: "Courses retrieved successfully",
      data: course
    }
  }
}
