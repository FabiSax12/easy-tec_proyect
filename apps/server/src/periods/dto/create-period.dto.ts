import { IsDateString, IsNumber, IsString } from "class-validator"
import { IsPeriodType } from "./period-type.decorator"

export class CreatePeriodDto {
  @IsString()
  @IsPeriodType()
  type: string

  @IsNumber()
  number: number

  @IsNumber()
  year: number

  @IsDateString()
  startDate: Date

  @IsDateString()
  endDate: Date
}
