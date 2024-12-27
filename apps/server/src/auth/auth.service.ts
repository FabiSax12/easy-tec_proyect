import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { User } from "@prisma/client"
import { compareSync } from "bcryptjs"
import { JwtPayload } from "jsonwebtoken"
import { UsersService } from "../users/users.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { MailerService } from "@nestjs-modules/mailer"
import { join } from "path"
import { readFileSync } from "fs"
import Handlebars from "handlebars"
import { ConfigService } from "@nestjs/config"

const ACCESS_TOKEN_EXPIRATION = "15m"
const REFRESH_TOKEN_EXPIRATION = "7d"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailerService: MailerService,
    private configService: ConfigService
  ) { }

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email)

    if (!user || !compareSync(pass, user.password)) {
      throw new UnauthorizedException("Invalid email or password")
    }

    if (!user.verified) {
      throw new UnauthorizedException("User is not verified")
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      avatar: user.avatar,
      carrier: user.carrier,
      verified: user.verified,
    }

    const access_token = await this.jwtService.signAsync(
      payload,
      {
        secret: this.configService.get("JWT_SECRET"),
        expiresIn: ACCESS_TOKEN_EXPIRATION
      }
    )
    const refresh_token = await this.jwtService.signAsync(
      payload,
      {
        secret: this.configService.get("JWT_SECRET"),
        expiresIn: REFRESH_TOKEN_EXPIRATION
      }
    )

    return { access_token, refresh_token }
  }

  async signUp(data: CreateUserDto): Promise<User> {
    const newUser = await this.usersService.create(data)

    return newUser
  }

  verifyRefreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, { secret: this.configService.get("JWT_SECRET") })
      return payload
    } catch (error) {
      throw new UnauthorizedException()
    }
  }

  async generateAccessToken(oldPayload: JwtPayload) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { exp, iat, ...payload } = oldPayload

    return await this.jwtService.signAsync(
      payload,
      {
        secret: this.configService.get("JWT_SECRET"),
        expiresIn: ACCESS_TOKEN_EXPIRATION
      }
    )
  }

  async generateRefreshToken(oldPayload: JwtPayload) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { exp, iat, ...payload } = oldPayload

    return await this.jwtService.signAsync(
      payload,
      {
        secret: this.configService.get("JWT_SECRET"),
        expiresIn: REFRESH_TOKEN_EXPIRATION
      }
    )
  }

  async generateVerificationToken(id: number) {
    return this.jwtService.sign({ id }, { secret: this.configService.get("JWT_SECRET") })
  }

  async sendMagicLink(email: string, token: string): Promise<void> {
    const magicLink = `${this.configService.get("CLIENT_URL")}/auth/verify?token=${token}`

    await this.mailerService.sendMail({
      to: email,
      subject: "Testing Magic Link",
      template: __dirname + "/templates/magic-link-email",
      context: { magicLink }
    })
  }

  async requestVerificationEmail(email: string): Promise<User> {
    const user = await this.usersService.findByEmail(email)

    if (!user) throw new UnauthorizedException("User not found")
    if (user.verified) throw new UnauthorizedException("User is already verified")

    const token = await this.generateVerificationToken(user.id)

    await this.sendMagicLink(email, token)

    console.log("Created token", token)

    return user
  }

  async verifyMagicLink(token: string): Promise<User> {
    const payload = this.jwtService.verify(token, { secret: this.configService.get("JWT_SECRET") })

    const user = await this.usersService.findById(payload.id)

    if (!user) throw new UnauthorizedException("User not found")

    return this.usersService.verify(user.id)
  }
}