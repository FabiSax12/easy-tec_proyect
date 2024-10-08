import { IsEmail, IsString, MinLength } from "class-validator"
import { IsStudentEmail } from "./email.decorator"

export class CreateUserDto {
  @IsString()
  name: string

  @IsString()
  lastname: string

  @IsEmail()
  @IsStudentEmail()
  email: string

  @IsString()
  @MinLength(8)
  password: string
}
