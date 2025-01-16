import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) { }

  use(req: any, res: any, next: () => void) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw new UnauthorizedException("Authorization header not found")
    }

    const [type, token] = authHeader.split(" ") ?? []

    if (type !== "Bearer") {
      throw new UnauthorizedException("Invalid token type")
    }

    try {
      const payload = this.jwtService.verify(
        token,
        { secret: this.configService.get("JWT_SECRET") }
      )

      if (!payload) {
        throw new UnauthorizedException("Invalid token")
      }

      payload.isAdmin = payload.email === process.env.ADMIN_EMAIL && payload.id === process.env.ADMIN_ID
      req.user = payload
      req.isAuthenticated = true
      next()
    } catch (error) {
      throw new UnauthorizedException("Invalid token")
    }
  }
}
