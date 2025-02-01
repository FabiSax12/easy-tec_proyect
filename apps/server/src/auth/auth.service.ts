import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { User } from "@prisma/client"
import { compareSync } from "bcryptjs"
import { JwtPayload } from "jsonwebtoken"
import { UsersService } from "../users/users.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { MailerService } from "@nestjs-modules/mailer"
import { ConfigService } from "@nestjs/config"

const ACCESS_TOKEN_EXPIRATION = "15m"
const REFRESH_TOKEN_EXPIRATION = "7d"
const REFRESH_THRESHOLD_MS = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

@Injectable()
export class AuthService {
  private readonly jwtSecret: string
  private readonly clientUrl: string

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {
    this.jwtSecret = this.configService.get<string>("JWT_SECRET")
    this.clientUrl = this.configService.get<string>("CLIENT_URL")
  }

  /**
   * User authentication and token generation.
   */
  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email)

    if (!user || !compareSync(password, user.password)) {
      throw new BadRequestException("Invalid email or password")
    }

    if (!user.verified) {
      throw new BadRequestException("User is not verified")
    }

    const payload = this.createPayload(user)
    const access_token = await this.generateToken(payload, ACCESS_TOKEN_EXPIRATION)
    const refresh_token = await this.generateToken(payload, REFRESH_TOKEN_EXPIRATION)

    return { access_token, refresh_token }
  }

  /**
   * User registration.
   */
  async signUp(data: CreateUserDto): Promise<void> {
    return this.usersService.create(data)
  }

  /**
   * Verifies a refresh token.
   */
  verifyRefreshToken(token: string): JwtPayload {
    try {
      return this.jwtService.verify<JwtPayload>(token, { secret: this.jwtSecret })
    } catch (error) {
      throw new UnauthorizedException("Invalid or expired refresh token")
    }
  }

  /**
   * Generates an access token.
   */
  async generateAccessToken(payload: JwtPayload): Promise<string> {
    return this.generateToken(payload, ACCESS_TOKEN_EXPIRATION)
  }

  /**
   * Generates a refresh token.
   */
  async generateRefreshToken(payload: JwtPayload): Promise<string> {
    return this.generateToken(payload, REFRESH_TOKEN_EXPIRATION)
  }

  /**
   * Handles token refresh logic.
   */
  async handleTokenRefresh(refreshToken: string) {
    const payload = this.verifyRefreshToken(refreshToken)

    const expiresAt = payload.exp * 1000
    const currentTime = Date.now()
    const timeRemaining = expiresAt - currentTime

    const newAccessToken = await this.generateAccessToken(payload)

    let newRefreshToken: string | undefined
    if (timeRemaining < REFRESH_THRESHOLD_MS) {
      newRefreshToken = await this.generateRefreshToken(payload)
    }

    return { newAccessToken, newRefreshToken }
  }

  /**
   * Generates a verification token for email confirmation.
   */
  async generateVerificationToken(userId: number): Promise<string> {
    return this.jwtService.sign({ id: userId }, { secret: this.jwtSecret })
  }

  /**
   * Sends a magic link to the user's email for email verification.
   */
  async sendMagicLink(email: string, token: string): Promise<void> {
    const magicLink = `${this.clientUrl}/auth/verify?token=${token}`
    await this.mailerService.sendMail({
      to: email,
      subject: "Verify your account",
      template: __dirname + "/templates/magic-link-email",
      context: { magicLink },
    })
  }

  /**
   * Requests a verification email for the user.
   */
  async requestVerificationEmail(email: string): Promise<User> {
    const user = await this.usersService.findByEmail(email)

    if (!user) throw new NotFoundException("User not found")
    if (user.verified) throw new BadRequestException("User is already verified")

    const token = await this.generateVerificationToken(user.id)
    await this.sendMagicLink(email, token)

    return user
  }

  /**
   * Verifies the email confirmation token and marks the user as verified.
   */
  async verifyMagicLink(token: string): Promise<User> {
    const payload = this.jwtService.verify(token, { secret: this.jwtSecret })

    const user = await this.usersService.findById(payload.id)
    if (!user) throw new NotFoundException("User not found")

    return this.usersService.verify(user.id)
  }

  /**
   * Creates a JWT payload from a user entity.
   */
  private createPayload(user: User): JwtPayload {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      avatar: user.avatar,
      carrier: user.carrier,
      verified: user.verified
    }
  }

  /**
   * Genrates a JWT token.
   */
  private async generateToken(payload: JwtPayload, expiresIn: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { exp, iat, ...rest } = payload

    return this.jwtService.signAsync(rest, {
      secret: this.jwtSecret,
      expiresIn,
    })
  }
}
