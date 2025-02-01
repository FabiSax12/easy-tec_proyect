import { Module } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { TasksController } from "./tasks.controller"
import { UserPeriodsService } from "src/user-periods/user-periods.service"

@Module({
  controllers: [TasksController],
  providers: [TasksService, UserPeriodsService]
})
export class TasksModule { }
