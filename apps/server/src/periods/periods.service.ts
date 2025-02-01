import { Injectable, NotFoundException } from "@nestjs/common"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class PeriodsService {
  constructor(private prisma: PrismaService) { }

  /**
   * Create a new period with a unique code
   */
  create(data: CreatePeriodDto) {
    const code = this.generatePeriodCode(data)
    return this.prisma.period.create({
      data: {
        ...data,
        code
      }
    })
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
    const code = this.generatePeriodCode(data) // Regenerate code if needed
    return this.prisma.period.update({
      where: { id },
      data: { ...existingPeriod, ...data, code }
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
        users: {
          some: {
            id: userId
          }
        }
      }
    })
  }

  /**
   * Helper method to generate a period code
   */
  private generatePeriodCode(data: CreatePeriodDto | UpdatePeriodDto) {
    return `${data.type}-${data.number}_${data.year}`
  }
}
