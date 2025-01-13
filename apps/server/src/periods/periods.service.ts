import { Injectable, UnauthorizedException } from "@nestjs/common"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class PeriodsService {
  constructor(private prisma: PrismaService) { }

  create(data: CreatePeriodDto) {
    throw new UnauthorizedException("You can not CREATE a period") // Only admin can create periods

    // Todo: Implement the logic to able admin to create periods

    return this.prisma.period.create({
      data: {
        ...data,
        code: `${data.type}-${data.number}-${data.year}`
      }
    })
  }

  findAll() {
    return this.prisma.period.findMany({
      orderBy: {
        startDate: "desc"
      }
    })
  }

  findOne(id: number) {
    return this.prisma.period.findUnique({ where: { id } })
  }

  update(id: number, data: UpdatePeriodDto) {
    throw new UnauthorizedException("You can not UPDATE a period") // Only admin can update periods

    // Todo: Implement the logic to able admin to update periods

    return this.prisma.period.update({ where: { id }, data })
  }

  remove(id: number) {
    throw new UnauthorizedException("You can not DELETE a period") // Only admin can delete periods

    // Todo: Implement the logic to able admin to delete periods

    return this.prisma.period.delete({ where: { id } })
  }

  findByUser(userId: number) {
    return this.prisma.period.findMany({
      where: {
        users: {
          some: {
            id: userId
          }
        }
      }
    })
  }
}
