import apiClient from "@/config/apiClient"
import { Period, CreatePeriodDto, UpdatePeriodDto } from "@/domain/entities/Period"
import { PeriodRepository } from "@/domain/repositories/PeriodRepository"
import { ErrorHandler } from "@/application/utils/ErrorHandler"

export const periodApiRepository: PeriodRepository = {
  async getPeriods(): Promise<Period[]> {
    try {
      const response = await apiClient.get("/periods")
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getPeriodById(id: number): Promise<Period> {
    try {
      const response = await apiClient.get(`/periods/${id}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getByUserId(userId: number): Promise<Period[]> {
    try {
      const response = await apiClient.get(`/users/${userId}/periods`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async createPeriod(period: CreatePeriodDto): Promise<Period> {
    try {
      const response = await apiClient.post("/periods", period)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async updatePeriod(periodId: number, period: UpdatePeriodDto): Promise<Period> {
    try {
      const response = await apiClient.patch(`/periods/${periodId}`, period)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async deletePeriod(periodId: number): Promise<Period> {
    try {
      const response = await apiClient.delete(`/periods/${periodId}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  }
}
