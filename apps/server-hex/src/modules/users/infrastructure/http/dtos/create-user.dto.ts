import { IsEmail, IsString, MinLength, IsNumber, IsOptional } from "class-validator"
import { IsStudentEmail } from '@/infrastructure/nestjs/decorators/email.decorator';

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

  @IsOptional()
  @IsNumber()
  majorId?: number | null
}