import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UsersService } from "../users/users.service"
import { compareSync } from "bcryptjs"
import { CreateUserDto } from "./dto/create-user.dto"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email)
    if (!compareSync(pass, user.password)) throw new UnauthorizedException()

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      carrier: user.carrier,
      avatar: user.avatar,
      verified: user.verified
    }
    return {
      access_token: await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET }),
    }
  }

  async signUp(data: CreateUserDto) {
    return await this.usersService.create(data)
  }
}