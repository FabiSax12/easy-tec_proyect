import { Controller, Get, Inject, Query } from "@nestjs/common"
import { ScheduleService } from "./schedules.service"
import { Cache } from "cache-manager"

@Controller("schedules")
export class SchedulesController {
  constructor(
    private readonly scheduleService: ScheduleService,
    @Inject("CACHE_MANAGER") private cacheManager: Cache
  ) { }

  @Get()
  async findAll(
    @Query("campus") campus: string,
    @Query("carrier") carrier: string,
    @Query("period") period: string
  ) {
    const cacheKey = `${campus}-${carrier}-${period}`
    const cachedData = await this.cacheManager.get(cacheKey)

    if (cachedData) {
      console.log("Returning cached data")
      return cachedData  // Returns cached data
    }

    const data = await this.scheduleService.getSchedule(campus, carrier, period, {
      email: process.env.TEC_EMAIL,
      password: process.env.TEC_PASSWORD
    })

    await this.cacheManager.set(cacheKey, data)  // Save in cache

    console.log("Returning fresh data")
    return data
  }
}
