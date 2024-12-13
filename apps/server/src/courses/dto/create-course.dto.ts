import { IsNumber, IsString } from "class-validator"

export class CreateCourseDto {
  @IsString()
  name: string

  @IsString()
  codex: string

  @IsString()
  period: string

  @IsString()
  state: string

  @IsString()
  teacher: string

  @IsNumber()
  credits: number

  @IsNumber()
  academicPeriodId: number
}
