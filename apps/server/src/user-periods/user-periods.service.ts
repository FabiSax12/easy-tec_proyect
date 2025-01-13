import { Injectable } from "@nestjs/common"
import { CreateUserPeriodDto } from "./dto/create-user-period.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class UserPeriodsService {
  constructor(private readonly prismaService: PrismaService) { }

  async assign(createUserPeriodDto: CreateUserPeriodDto) {
    return await this.prismaService.period.update({
      where: { id: createUserPeriodDto.periodId },
      data: {
        users: {
          connect: { id: createUserPeriodDto.userId }
        }
      }
    })
  }

  async unassign(data: { userId: number; periodId: number }) {
    return this.prismaService.$transaction(async (tx) => {
      const courses = await tx.course.findMany({
        where: { periodId: data.periodId },
        select: { id: true },
      })

      await tx.task.deleteMany({
        where: {
          userId: data.userId,
          courseId: {
            in: courses.map((course) => course.id),
          },
        },
      })

      await tx.course.deleteMany({
        where: {
          periodId: data.periodId,
        },
      })

      return tx.period.update({
        where: { id: data.periodId },
        data: {
          users: {
            disconnect: { id: data.userId }
          }
        }
      })
    })
  }
}
