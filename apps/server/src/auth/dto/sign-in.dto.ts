import { IsString, MinLength } from "class-validator"
import { IsStudentEmail } from "./email.decorator"

export class SignInDto {
  @IsString()
  @IsStudentEmail()
  email: string

  @IsString()
  @MinLength(8)
  password: string
}