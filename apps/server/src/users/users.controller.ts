import { Body, Controller, Patch, Request, UseGuards, UseInterceptors } from "@nestjs/common"
import { UsersService } from "./users.service"
import { UpdateUserDto } from "./dto/update-user.dto"
import { AuthGuard } from "src/shared/guards/auth.guard"
import { PreventReturnPrivateDataInterceptor } from "src/shared/interceptors/preventReturnPrivateData.interceptor"

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Patch()
  @UseGuards(AuthGuard)
  @UseInterceptors(PreventReturnPrivateDataInterceptor)
  updateUser(@Request() req, @Body() newUser: UpdateUserDto) {

    const userId = req.user.id

    if (userId) return this.usersService.update(userId, newUser)
  }
}
