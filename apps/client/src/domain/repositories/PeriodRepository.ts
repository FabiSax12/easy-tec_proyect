import { CreatePeriodDto, Period, UpdatePeriodDto } from "../entities/Period"

export interface PeriodRepository {
  getPeriods(): Promise<Period[]>
  getPeriodById(id: number): Promise<Period>
  getByUserId(userId: number): Promise<Period[]>
  createPeriod(period: CreatePeriodDto): Promise<Period>
  updatePeriod(periodId: number, period: UpdatePeriodDto): Promise<Period>
  deletePeriod(periodId: number): Promise<Period>
}