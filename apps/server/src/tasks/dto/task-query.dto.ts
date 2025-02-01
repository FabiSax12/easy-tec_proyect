import { IsOptional, IsBoolean, IsString, IsInt } from "class-validator"

export class TaskQueryDto {
  @IsOptional()
  @IsBoolean()
  filterByUser?: boolean

  @IsOptional()
  @IsInt()
  periodId?: number

  @IsOptional()
  @IsString()
  periodCode?: string
}
