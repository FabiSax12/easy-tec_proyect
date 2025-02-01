import { Injectable } from "@nestjs/common"
import { CreateTaskDto } from "./dto/create-task.dto"
import { UpdateTaskDto } from "./dto/update-task.dto"
import { Task } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) { }

  // Función reutilizable para incluir el nombre del curso
  private courseSelect = {
    course: {
      select: {
        name: true,
      },
    },
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.prismaService.task.create({
      data: createTaskDto,
      include: this.courseSelect,
    })
  }

  async findAll(): Promise<Task[]> {
    return this.prismaService.task.findMany({
      include: this.courseSelect,
    })
  }

  async findOne(id: number): Promise<Task | null> {
    return this.prismaService.task.findUnique({
      where: { id },
      include: this.courseSelect,
    })
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.prismaService.task.update({
      where: { id },
      data: updateTaskDto,
      include: this.courseSelect,
    })
  }

  async remove(id: number): Promise<Task> {
    return this.prismaService.task.delete({
      where: { id },
      include: this.courseSelect,
    })
  }

  // Método para encontrar tareas por usuario
  async findByUser(userId: number): Promise<Task[]> {
    return this.prismaService.task.findMany({
      where: { userId },
      include: this.courseSelect,
    })
  }

  // Método genérico para encontrar tareas por período
  private async findTasksByPeriodCondition(whereCondition: any): Promise<Task[]> {
    return this.prismaService.task.findMany({
      where: whereCondition,
      include: this.courseSelect,
    })
  }

  // Método para encontrar tareas por período ID
  async findByPeriod(periodId: number): Promise<Task[]> {
    const courses = await this.prismaService.course.findMany({
      where: { periodId },
    })
    const courseIds = courses.map(course => course.id)
    return this.findTasksByPeriodCondition({
      courseId: { in: courseIds },
    })
  }

  // Método para encontrar tareas por código de período
  async findByPeriodCode(periodCode: string): Promise<Task[]> {
    return this.findTasksByPeriodCondition({
      course: {
        period: {
          code: periodCode,
        },
      },
    })
  }

  // Método para encontrar tareas por usuario y período
  async findByUserAndPeriod(userId: number, periodId: number): Promise<Task[]> {
    const courses = await this.prismaService.course.findMany({
      where: { periodId },
    })
    const courseIds = courses.map(course => course.id)
    return this.findTasksByPeriodCondition({
      userId,
      courseId: { in: courseIds },
    })
  }
}
