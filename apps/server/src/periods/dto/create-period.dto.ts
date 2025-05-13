import { IsDateString, IsNumber, IsString } from "class-validator"
import { IsPeriodType } from "./period-type.decorator"
import { PeriodType } from "@easy-tec/db"

export class CreatePeriodDto {
  @IsString()
  @IsPeriodType()
  type: PeriodType

  @IsNumber()
  number: number

  @IsNumber()
  year: number

  @IsDateString()
  startDate: Date

  @IsDateString()
  endDate: Date
}
