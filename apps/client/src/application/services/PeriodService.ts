import { CreatePeriodDto, Period, UpdatePeriodDto } from "@/domain/entities/Period"
import { PeriodRepository } from "@/domain/repositories/PeriodRepository"

export const createPeriodService = (periodRepository: PeriodRepository) => ({
  async createPeriod(periodData: CreatePeriodDto): Promise<Period> {
    return await periodRepository.createPeriod(periodData)
  },

  async deletePeriod(periodId: number): Promise<Period> {
    return await periodRepository.deletePeriod(periodId)
  },

  async getPeriodById(periodId: number): Promise<Period> {
    return periodRepository.getPeriodById(periodId)
  },

  async getPeriods(): Promise<Period[]> {
    return periodRepository.getPeriods()
  },

  async getByUserId(userId: number): Promise<Period[]> {
    return periodRepository.getByUserId(userId)
  },

  async updatePeriod(periodId: number, updates: UpdatePeriodDto): Promise<Period> {
    return await periodRepository.updatePeriod(periodId, updates)
  }
})