import { Injectable, NotFoundException } from "@nestjs/common"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class PeriodsService {
  constructor(private prisma: PrismaService) { }

  /**
   * Create a new period with a unique code
   */
  create(data: CreatePeriodDto) {
    return this.prisma.period.create({ data })
  }

  /**
   * Get all periods ordered by start date
   */
  findAll() {
    return this.prisma.period.findMany({
      orderBy: {
        startDate: "desc"
      }
    })
  }

  /**
   * Find a period by its ID
   */
  async findOne(id: number) {
    const period = await this.prisma.period.findUnique({ where: { id } })
    if (!period) {
      throw new NotFoundException(`Period with ID ${id} not found`)
    }
    return period
  }

  /**
   * Update a period's data
   */
  async update(id: number, data: UpdatePeriodDto) {
    const existingPeriod = await this.findOne(id)  // Validate if the period exists
    return this.prisma.period.update({
      where: { id },
      data: { ...existingPeriod, ...data }
    })
  }

  /**
   * Remove a period by ID
   */
  async remove(id: number) {
    const existingPeriod = await this.findOne(id)  // Validate if the period exists
    return this.prisma.period.delete({ where: { id } })
  }

  /**
   * Find periods by user
   */
  findByUser(userId: number) {
    return this.prisma.period.findMany({
      where: {
        userPeriods: {
          some: {
            userId
          }
        }
      }
    })
  }
}
