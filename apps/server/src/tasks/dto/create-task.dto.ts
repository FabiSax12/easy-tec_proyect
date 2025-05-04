import { IsDate, IsDateString, IsNumber, IsString, Max, Min } from "class-validator"
import { IsTaskState } from "./state.decorator"
import { Prisma, TaskState } from "@easy-tec/db"
import { Optional } from "@nestjs/common"

export class CreateTaskDto implements Omit<Prisma.TaskCreateInput, "user" | "course"> {
  @IsString()
  name: string

  @IsString()
  description: string

  @IsDateString()
  date: Date

  @IsNumber()
  userId: number

  @IsNumber()
  courseId: number

  // @Optional()
  // @IsString()
  // @IsTaskState()
  // state?: Prisma.TaskStateCreateNestedOneWithoutTasksInput

  @IsDateString()
  endDate: string | Date

  @Optional()
  @IsNumber()
  @Max(100)
  @Min(0)
  percentage?: number
}
