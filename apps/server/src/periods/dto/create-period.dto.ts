import { IsDateString, IsNumber, IsString } from "class-validator"
import { IsPeriodType } from "./period-type.decorator"

export class CreatePeriodDto {
  @IsString()
  @IsPeriodType()
  type: string

  @IsNumber()
  typeId: number

  @IsDateString()
  startDate: Date

  @IsDateString()
  endDate: Date

  @IsNumber()
  userId: number
}
