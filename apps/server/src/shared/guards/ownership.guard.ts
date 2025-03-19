import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { UsersService } from "src/users/users.service"

@Injectable()
export class OwnershipGuard implements CanActivate {
  constructor(private readonly usersService: UsersService, private reflector: Reflector) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const user = request.user
    if (!user) {
      throw new UnauthorizedException("User not found in request")
    }

    // Obtener los metadatos del decorador en la ruta
    const ownershipData = this.reflector.get<{ type: string; idParam?: string; idBody?: string }>(
      "ownership",
      context.getHandler()
    )
    if (!ownershipData) {
      return true // Si la ruta no tiene restricciones, permitir el acceso
    }

    const resourceId = ownershipData.idParam
      ? +request.params[ownershipData.idParam]
      : +request.body[ownershipData.idBody]

    if (!resourceId) {
      throw new UnauthorizedException("Resource ID is not available")
    }

    let hasAccess = false
    if (ownershipData.type === "period") {
      hasAccess = await this.usersService.isUserPeriod(user.id, resourceId)
    } else if (ownershipData.type === "course") {
      hasAccess = await this.usersService.isUserCourse(user.id, resourceId)
    } else if (ownershipData.type === "task") {
      hasAccess = await this.usersService.isUserTask(user.id, resourceId)
    }

    if (!hasAccess) {
      throw new UnauthorizedException(`User does not have access to this ${ownershipData.type}`)
    }

    return true
  }
}
