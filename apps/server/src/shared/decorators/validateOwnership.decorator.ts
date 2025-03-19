import { SetMetadata, UnauthorizedException } from "@nestjs/common"
import { UsersService } from "src/users/users.service"

type ValidateOwnershipData = {
  type: "period" | "course" | "task";
  idParam?: string;
  idBody?: string;
}

export const ValidateOwnership = (data: ValidateOwnershipData) => SetMetadata("ownership", data)

function ValidateOwnership2(data: ValidateOwnershipData) {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      const ctx = args[0]
      console.log("req", ctx)
      const req = ctx
      const userId = req.user.id
      const resourceId = data.idParam ? +req.params[data.idParam] : +req.body[data.idBody]

      const userPeriodsService = this.userService as UsersService

      if (!userPeriodsService) {
        throw new Error("UserPeriodsService is not available")
      }

      if (!resourceId) {
        throw new Error("Resource ID is not available")
      }

      if (data.type === "period") {
        const hasAccess = await userPeriodsService.isUserPeriod(userId, resourceId)
        if (!hasAccess) throw new UnauthorizedException("User does not have access to this period")
      } else if (data.type === "course") {
        const hasAccess = await userPeriodsService.isUserCourse(userId, resourceId)
        if (!hasAccess) throw new UnauthorizedException("User does not have access to this course")
      } else if (data.type === "task") {
        const hasAccess = await userPeriodsService.isUserTask(userId, resourceId)
        if (!hasAccess) throw new UnauthorizedException("User does not have access to this task")
      }

      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}
