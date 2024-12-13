import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { CreateTaskDto } from "./dto/create-task.dto"
import { UpdateTaskDto } from "./dto/update-task.dto"

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto)
  }

  @Get()
  findAll(
    @Query("userId", ParseIntPipe) userId: number,
    @Query("period") period: string
  ) {
    if (!userId && !period) return this.tasksService.findAll()

    if (userId && period) return this.tasksService.findByUserAndPeriod(userId, period)
    if (userId) return this.tasksService.findByUser(userId)
    if (period) return this.tasksService.findByPeriod(period)
    return this.tasksService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tasksService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tasksService.remove(+id)
  }
}
