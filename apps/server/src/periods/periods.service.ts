import { Injectable } from "@nestjs/common"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class PeriodsService {
  constructor(private prisma: PrismaService) { }

  create(data: CreatePeriodDto) {
    return this.prisma.academicPeriod.create({ data })
  }

  findAll() {
    return this.prisma.academicPeriod.findMany()
  }

  findOne(id: number) {
    return this.prisma.academicPeriod.findUnique({ where: { id } })
  }

  update(id: number, data: UpdatePeriodDto) {
    return this.prisma.academicPeriod.update({ where: { id }, data })
  }

  remove(id: number) {
    return this.prisma.academicPeriod.delete({ where: { id } })
  }

  findByUser(userId: number) {
    return this.prisma.academicPeriod.findMany({ where: { userId } })
  }
}
