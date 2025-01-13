import { IsNumber } from "class-validator"

export class CreateUserPeriodDto {
  @IsNumber()
  userId: number

  @IsNumber()
  periodId: number
}
