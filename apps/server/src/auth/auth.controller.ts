import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common"
import type { User } from "@easy-tec/db"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { SignInDto } from "./dto/sign-in.dto"
import { AuthGuard } from "../shared/guards/auth.guard"
import type { Response, Request } from "express"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  /**
   * Login endpoint: Authenticates the user and sets refresh token in a secure cookie.
   */
  @Post("login")
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    const { access_token, refresh_token } = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    )

    this.setRefreshTokenCookie(res, refresh_token)
    res.json({ access_token })
  }

  /**
   * Signup endpoint: Registers a new user.
   */
  @Post("signup")
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto)
  }

  /**
   * Refresh token endpoint: Issues a new access token and optionally rotates the refresh token.
   */
  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies["refresh_token"]

    if (!refreshToken) {
      throw new UnauthorizedException("Refresh token is missing")
    }

    const { newAccessToken, newRefreshToken } = await this.authService.handleTokenRefresh(refreshToken)

    if (newRefreshToken) {
      this.setRefreshTokenCookie(res, newRefreshToken)
    }

    res.json({ access_token: newAccessToken })
  }

  /**
   * Protected endpoint: Retrieves the authenticated user's profile.
   */
  @Get("profile")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  getProfile(@Req() req): User {
    const { exp, iat, isAdmin, ...user } = req.user
    return user as User
  }

  /**
   * Request email verification endpoint: Sends a verification email to the user.
   */
  @Post("request-verification-email")
  @HttpCode(HttpStatus.OK)
  async requestVerificationEmail(@Body("email") email: string) {
    return this.authService.requestVerificationEmail(email)
  }

  /**
   * Verify magic link endpoint: Verifies the email confirmation token.
   */
  @Get("verify")
  @HttpCode(HttpStatus.OK)
  async verify(@Query("token") token: string) {
    return this.authService.verifyMagicLink(token)
  }

  /**
   * Helper method: Sets a secure cookie for the refresh token.
   */
  private setRefreshTokenCookie(res: Response, refreshToken: string) {
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    })
  }
}
