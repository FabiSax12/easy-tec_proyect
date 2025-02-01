import { IsNumber } from "class-validator"

export class CreateUserPeriodDto {
  @IsNumber()
  periodId: number
}
