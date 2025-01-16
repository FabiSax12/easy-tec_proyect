import { Controller, Post, Body, Delete, UseGuards, Request, Param, ParseIntPipe } from "@nestjs/common"
import { UserPeriodsService } from "./user-periods.service"
import { CreateUserPeriodDto } from "./dto/create-user-period.dto"
import { AuthGuard } from "src/shared/guards/auth.guard"

@Controller("user-periods")
export class UserPeriodsController {
  constructor(private readonly userPeriodsService: UserPeriodsService) { }

  @Post()
  @UseGuards(AuthGuard)
  assing(
    @Request() req,
    @Body() createUserPeriodDto: CreateUserPeriodDto
  ) {
    const userId = req.user.id

    if (createUserPeriodDto.userId && createUserPeriodDto.userId !== userId) {
      throw new Error("You can't assign a period to another user")
    }

    return this.userPeriodsService.assign(createUserPeriodDto)
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  unassign(
    @Request() req,
    @Param("id", ParseIntPipe) periodId: number
  ) {
    const userId = req.user.id
    return this.userPeriodsService.unassign({ userId, periodId })
  }
}
