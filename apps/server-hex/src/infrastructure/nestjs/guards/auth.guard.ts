import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    if (request.isAuthenticated) return true

    throw new UnauthorizedException("Invalid token")
  }
}