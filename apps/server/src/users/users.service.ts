import { ConflictException, Injectable } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { PrismaService } from "../prisma/prisma.service"
import { hashSync } from "bcryptjs"

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async create(data: CreateUserDto) {
    const userExists = await this.findByEmail(data.email)
    if (userExists) throw new ConflictException("Email already exists: " + data.email)

    data.password = hashSync(data.password, 10)
    const createdUser = await this.prismaService.user.create({ data })

    if (!createdUser) throw new ConflictException("User could not be created")
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  findById(id: number) {
    return this.prismaService.user.findUnique({ where: { id } })
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = hashSync(updateUserDto.password, 10)
    }
    return this.prismaService.user.update({ where: { id }, data: updateUserDto })
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } })
  }

  verify(id: number) {
    return this.prismaService.user.update({ where: { id }, data: { verified: true } })
  }

  async isUserPeriod(userId: number, periodId: number) {
    const period = await this.prismaService.user.findUnique({
      where: {
        id: userId,
        userPeriods: {
          some: {
            id: periodId
          }
        }
      }
    })

    return !!period
  }

  async isUserCourse(userId: number, courseId: number) {
    const course = await this.prismaService.course.findUnique({
      where: {
        id: courseId,
        period: {
          userPeriods: {
            some: {
              id: userId
            }
          }
        }
      }
    })

    return !!course
  }

  isUserTask(userId: number, taskId: number) {
    const task = this.prismaService.task.findFirst({
      where: {
        id: taskId,
        userId
      }
    })

    return !!task
  }
}
