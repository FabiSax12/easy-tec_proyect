import { IsOptional, IsBoolean, IsString, IsInt, } from "class-validator"
import { Transform } from "class-transformer"

export class TaskQueryDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === "true")
  filterByUser?: boolean

  @IsOptional()
  @IsInt()
  periodId?: number

  @IsOptional()
  @IsString()
  periodCode?: string
}
