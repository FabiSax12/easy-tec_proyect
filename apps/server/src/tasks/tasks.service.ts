import { Injectable } from "@nestjs/common"
import { CreateTaskDto } from "./dto/create-task.dto"
import { UpdateTaskDto } from "./dto/update-task.dto"
import { Task } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = await this.prismaService.task.create({
      data: createTaskDto
    })

    return task
  }

  findAll() {
    return this.prismaService.task.findMany()
  }

  findAllWithCourseName() {
    return this.prismaService.task.findMany({
      include: {
        course: {
          select: {
            name: true
          }
        }
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.task.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updatedTask = await this.prismaService.task.update({
      where: { id },
      data: updateTaskDto,
      include: {
        course: {
          select: {
            name: true
          }
        }
      }
    })

    return updatedTask
  }

  remove(id: number) {
    return this.prismaService.task.delete({
      where: { id }
    })
  }

  async findByUser(userId: number): Promise<Task[]> {
    const task = await this.prismaService.task.findMany({
      where: {
        userId
      },
      include: {
        course: {
          select: {
            name: true
          }
        }
      }
    })

    return task
  }

  async findByPeriod(period: string): Promise<Task[]> {
    const courses = await this.prismaService.course.findMany({
      where: { period }
    })

    const task = await this.prismaService.task.findMany({
      where: {
        courseId: {
          in: courses.map(course => course.id)
        }
      },
      include: {
        course: {
          select: {
            name: true
          }
        }
      }
    })

    return task
  }

  async findByUserAndPeriod(userId: number, period: string): Promise<Task[]> {
    const courses = await this.prismaService.course.findMany({
      where: { period }
    })

    const task = await this.prismaService.task.findMany({
      where: {
        userId,
        courseId: {
          in: courses.map(course => course.id)
        }
      },
      include: {
        course: {
          select: {
            name: true
          }
        }
      }
    })

    return task
  }
}
