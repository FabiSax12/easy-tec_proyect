import { Injectable } from "@nestjs/common"
import { CreateCourseDto } from "./dto/create-course.dto"
import { UpdateCourseDto } from "./dto/update-course.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class CoursesService {
  constructor(private readonly prismaService: PrismaService) { }

  create(createCourseDto: CreateCourseDto) {
    return this.prismaService.course.create({
      data: createCourseDto
    })
  }

  findAll() {
    return this.prismaService.course.findMany()
  }

  findOne(id: number) {
    return this.prismaService.course.findUnique({
      where: { id }
    })
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prismaService.course.update({
      where: { id },
      data: updateCourseDto
    })
  }

  remove(id: number) {
    return this.prismaService.course.delete({
      where: { id }
    })
  }

  async findByUser(userId: number) {
    const { academicPeriods } = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { academicPeriods: true }
    })

    return this.prismaService.course.findMany({
      where: { academicPeriodId: { in: academicPeriods.map(ap => ap.id) } }
    })
  }
}
