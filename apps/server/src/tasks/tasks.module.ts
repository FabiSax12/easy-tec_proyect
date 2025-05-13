import { Module } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { TasksController } from "./tasks.controller"
import { UserPeriodsService } from "../user-periods/user-periods.service"

@Module({
  controllers: [TasksController],
  providers: [TasksService, UserPeriodsService]
})
export class TasksModule { }
