import { Controller, Get, Query } from "@nestjs/common"
import { ScheduleService } from "./schedules.service"

@Controller("schedules")
export class SchedulesController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Get()
  findAll(@Query("campus") campus: string, @Query("carrier") carrier: string, @Query("period") period: string) {
    return this.scheduleService.getSchedule(campus, carrier, period, {
      email: process.env.TEC_EMAIL,
      password: process.env.TEC_PASSWORD
    })
  }
}
