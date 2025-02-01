import { IsNumber, IsString } from "class-validator"

export class CreateCourseDto {
  @IsString()
  name: string

  @IsString()
  code: string

  @IsString()
  periodCode: string

  @IsString()
  state: string

  @IsString()
  teacher: string

  @IsNumber()
  credits: number

  @IsNumber()
  periodId: number
}
