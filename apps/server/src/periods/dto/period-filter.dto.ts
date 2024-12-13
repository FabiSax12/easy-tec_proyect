import { Transform } from "class-transformer"
import { IsNumber, IsOptional } from "class-validator"

export class PeriodFilterDto {
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  userId?: number
}