import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"

@Injectable()
export class AdminGuard implements CanActivate {

  constructor() { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    if (request.isAuthenticated && request.isAdmin) return true

    throw new UnauthorizedException("User is not an admin")
  }
}