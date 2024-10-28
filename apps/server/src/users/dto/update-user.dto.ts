import { PartialType } from "@nestjs/mapped-types"
import { CreateUserDto } from "./create-user.dto"
import { IsBoolean, IsString, IsUrl } from "class-validator"

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  carrier?: string

  @IsUrl()
  avatar?: string

  @IsBoolean()
  verified?: boolean
}
