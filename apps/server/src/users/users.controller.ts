import { Body, Controller, Patch, Request, UseGuards } from "@nestjs/common"
import { UsersService } from "./users.service"
import { UpdateUserDto } from "./dto/update-user.dto"
import { AuthGuard } from "src/shared/guards/auth.guard"

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Patch()
  @UseGuards(AuthGuard)
  updateUser(@Request() req, @Body() newUser: UpdateUserDto) {

    const userId = req.user.id

    if (userId) return this.usersService.update(userId, newUser)
  }
}
