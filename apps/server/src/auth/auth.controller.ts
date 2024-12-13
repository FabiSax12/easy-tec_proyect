import {
  Body, Controller, Get, HttpCode, HttpStatus,
  Post, Request, UnauthorizedException, UseGuards
} from "@nestjs/common"
import { User } from "@prisma/client"
import { AuthGuard } from "./auth.guard"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { SignInDto } from "./dto/sign-in.dto"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }

  @Post("signup")
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto)
  }

  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  async refresh(@Body("refresh_token") refreshToken: string) {
    try {
      const payload = this.authService.verifyRefreshToken(refreshToken)
      const expiresAt = payload.exp * 1000
      const currentTime = Date.now()
      const timeRemaining = expiresAt - currentTime

      const refreshThreshold = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

      const newAccessToken = await this.authService.generateAccessToken(payload)

      let newRefreshToken: string | undefined

      // If the refresh token is about to expire, generate a new one
      if (timeRemaining < refreshThreshold) {
        newRefreshToken = await this.authService.generateRefreshToken(payload)
      }

      return {
        access_token: newAccessToken,
        ...(newRefreshToken && { refresh_token: newRefreshToken })
      }
    } catch (e) {
      console.log(e)
      throw new UnauthorizedException("Invalid or expired refresh token")
    }
  }


  @Get("profile")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  getProfile(@Request() req): User {
    return req.user
  }
}