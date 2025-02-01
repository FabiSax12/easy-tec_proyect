import { PartialType } from "@nestjs/mapped-types"
import { CreateUserDto } from "./create-user.dto"
import { IsBoolean, IsString, IsUrl, IsOptional } from "class-validator"

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  carrier?: string

  @IsUrl()
  @IsOptional()
  avatar?: string

  @IsBoolean()
  @IsOptional()
  verified?: boolean
}
