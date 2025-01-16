import {
  Body, Controller, Get, HttpCode, HttpStatus,
  Post, Query, Request, UnauthorizedException
} from "@nestjs/common"
import { User } from "@prisma/client"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { SignInDto } from "./dto/sign-in.dto"
import { Public } from "src/shared/decorators/publicEndpoint.decorator"

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Post("login")
  @Public()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }

  @Post("signup")
  @Public()
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto)
  }

  @Post("refresh")
  @Public()
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
  @HttpCode(HttpStatus.OK)
  getProfile(@Request() req): User {
    return req.user
  }

  @Post("request-verification-email")
  @Public()
  @HttpCode(HttpStatus.OK)
  async requestVerificationEmail(@Body("email") email: string) {
    return this.authService.requestVerificationEmail(email)
  }

  @Get("verify")
  @Public()
  @HttpCode(HttpStatus.OK)
  async verify(@Query("token") token: string) {
    return this.authService.verifyMagicLink(token)
  }
}