import { Module } from "@nestjs/common"
import { ScheduleService } from "./schedules.service"
import { SchedulesController } from "./schedules.controller"
import { CacheModule } from "@nestjs/cache-manager"

@Module({
  imports: [
    CacheModule.register({
      ttl: 1000 * 60 * 60 * 24, // 24 hours
      max: 100,
    }),
  ],
  controllers: [SchedulesController],
  providers: [ScheduleService]
})
export class SchedulesModule { }
