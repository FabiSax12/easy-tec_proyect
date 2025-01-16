import { ConflictException, Injectable } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { PrismaService } from "src/prisma/prisma.service"
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

    return createdUser
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
    return this.prismaService.user.update({ where: { id }, data: updateUserDto })
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } })
  }

  verify(id: number) {
    return this.prismaService.user.update({ where: { id }, data: { verified: true } })
  }

  changePassword(userId: number, newPassword: string) {
    this.prismaService.user.update({
      where: {
        id: userId
      },
      data: {
        password: newPassword
      }
    })
  }

  async isUserPeriod(userId: number, periodId: number) {
    const period = await this.prismaService.user.findUnique({
      where: {
        id: userId,
        periods: {
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
          users: {
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
    return this.prismaService.task.findFirst({
      where: {
        id: taskId,
        userId
      }
    })
  }
}
