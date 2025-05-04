import { CourseState, Prisma } from "@easy-tec/db"
import { IsNumber, IsString } from "class-validator"

export class CreateCourseDto implements Prisma.CourseCreateInput {

  @IsString()
  name: string

  @IsString()
  code: string

  @IsString()
  periodCode: string

  @IsString()
  state: CourseState

  @IsString()
  teacherName: string

  @IsNumber()
  credits: number

  @IsNumber()
  period: Prisma.PeriodCreateNestedOneWithoutCoursesInput
}
