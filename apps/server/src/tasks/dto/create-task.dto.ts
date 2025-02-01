import { IsDate, IsDateString, IsNumber, IsString } from "class-validator"
import { IsTaskState } from "./state.decorator"

export class CreateTaskDto {
  @IsString()
  name: string

  @IsString()
  description: string

  @IsString()
  @IsTaskState()
  state: string

  @IsDateString()
  date: Date

  @IsNumber()
  userId: number

  @IsNumber()
  courseId: number
}
