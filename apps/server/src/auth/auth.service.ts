import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { User } from "@prisma/client"
import { compareSync } from "bcryptjs"
import { JwtPayload } from "jsonwebtoken"
import { UsersService } from "../users/users.service"
import { CreateUserDto } from "./dto/create-user.dto"

const ACCESS_TOKEN_EXPIRATION = "15m"
const REFRESH_TOKEN_EXPIRATION = "7d"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
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
        secret: process.env.JWT_SECRET,
        expiresIn: ACCESS_TOKEN_EXPIRATION
      }
    )
    const refresh_token = await this.jwtService.signAsync(
      payload,
      {
        secret: process.env.JWT_SECRET,
        expiresIn: REFRESH_TOKEN_EXPIRATION
      }
    )

    return { access_token, refresh_token }
  }

  async signUp(data: CreateUserDto): Promise<User> {
    return await this.usersService.create(data)
  }

  verifyRefreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, { secret: process.env.JWT_SECRET })
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
        secret: process.env.JWT_SECRET,
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
        secret: process.env.JWT_SECRET,
        expiresIn: REFRESH_TOKEN_EXPIRATION
      }
    )
  }
}