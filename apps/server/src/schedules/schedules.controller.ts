import { Body, Controller, Get, Inject, Param, Post, Query } from "@nestjs/common"
import { ScheduleService } from "./schedules.service"
import type { Cache } from "cache-manager"

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

    const data = await this.scheduleService.getSchedule(campus, carrier, period)

    await this.cacheManager.set(cacheKey, data)  // Save in cache

    console.log("Returning fresh data")
    return data
  }

  @Get("availables/:studentId")
  async findByStudentId(@Param("studentId") studentId: string) {
    return await this.scheduleService.getScheduleByStudentId(studentId)
  }

  @Post(":studentId")
  async findByStudentIdAndCodes(
    @Param("studentId") studentId: string,
    @Body() codes: { code: string, campus: { name: string, typeOfGroup: string }[] }[]
  ) {
    return await this.scheduleService.getSpecificitiesSchedules(studentId, codes)
  }
}
