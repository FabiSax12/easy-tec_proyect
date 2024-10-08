import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common"
import { AuthGuard } from "./auth.guard"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "./dto/create-user.dto"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: { email: string, password: string }) {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }

  @Post("signup")
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto)
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user
  }
}