import { Controller, Post, Body, Delete } from "@nestjs/common"
import { UserPeriodsService } from "./user-periods.service"
import { CreateUserPeriodDto } from "./dto/create-user-period.dto"

@Controller("user-periods")
export class UserPeriodsController {
  constructor(private readonly userPeriodsService: UserPeriodsService) { }

  @Post()
  assing(@Body() createUserPeriodDto: CreateUserPeriodDto) {
    return this.userPeriodsService.assign(createUserPeriodDto)
  }

  @Delete()
  unassign(@Body() createUserPeriodDto: CreateUserPeriodDto) {
    return this.userPeriodsService.unassign(createUserPeriodDto)
  }
}
