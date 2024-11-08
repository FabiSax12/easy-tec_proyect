import { HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UsersService } from "../users/users.service"
import { compareSync } from "bcryptjs"
import { CreateUserDto } from "./dto/create-user.dto"
import { ResponseDto } from "src/types/shared/response.dto"
import { JwtPayload } from "jsonwebtoken"

interface SignIn {
  access_token: string
  refresh_token: string
}

const ACCESS_TOKEN_EXPIRATION = "15m"
const REFRESH_TOKEN_EXPIRATION = "7d"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, pass: string): Promise<ResponseDto<SignIn>> {
    const user = await this.usersService.findByEmail(email)

    if (!user || !compareSync(pass, user.password)) {
      return {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: "Invalid email or password"
      }
    }

    if (!user.verified) {
      return {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: "User is not verified"
      }
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

    return {
      statusCode: HttpStatus.ACCEPTED,
      message: "User authenticated",
      data: { access_token, refresh_token }
    }
  }

  async signUp(data: CreateUserDto): Promise<ResponseDto<null>> {
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