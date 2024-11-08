import {
  Body, Controller, Get, HttpCode, HttpStatus,
  Post, Request, UnauthorizedException, UseGuards
} from "@nestjs/common"
import { User } from "@prisma/client"
import { AuthGuard } from "./auth.guard"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { ResponseDto } from "src/types/shared/response.dto"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: { email: string, password: string }): Promise<ResponseDto<any>> {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }

  @Post("signup")
  signUp(@Body() signUpDto: CreateUserDto): Promise<ResponseDto<any>> {
    return this.authService.signUp(signUpDto)
  }

  @Post("refresh")
  async refresh(@Body("refresh_token") refreshToken: string): Promise<ResponseDto<any>> {
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
        statusCode: HttpStatus.OK,
        message: "Access token refreshed",
        data: {
          access_token: newAccessToken,
          ...(newRefreshToken && { refresh_token: newRefreshToken })
        }
      }
    } catch (e) {
      console.log(e)
      throw new UnauthorizedException("Invalid or expired refresh token")
    }
  }


  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req): ResponseDto<User> {
    return {
      statusCode: HttpStatus.OK,
      message: "User profile",
      data: req.user
    }
  }
}