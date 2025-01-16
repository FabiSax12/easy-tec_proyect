import { Injectable } from "@nestjs/common"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class PeriodsService {
  constructor(private prisma: PrismaService) { }

  create(data: CreatePeriodDto) {
    return this.prisma.period.create({
      data: {
        ...data,
        code: `${data.type}-${data.number}_${data.year}`
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
    return this.prisma.period.update({ where: { id }, data })
  }

  remove(id: number) {
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
