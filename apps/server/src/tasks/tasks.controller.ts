import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Request,
  UnauthorizedException,
  ParseBoolPipe,
  Query,
} from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { CreateTaskDto } from "./dto/create-task.dto"
import { UpdateTaskDto } from "./dto/update-task.dto"
import { AuthGuard } from "src/shared/guards/auth.guard"
import { ValidateOwnership } from "src/shared/decorators/validateOwnership.decorator"

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  @UseGuards(AuthGuard)
  async create(@Request() req, @Body() createTaskDto: CreateTaskDto) {
    const userId = req.user.id

    if (createTaskDto.userId && createTaskDto.userId !== userId) {
      throw new UnauthorizedException("You can't create tasks for other users")
    }

    return this.tasksService.create({ ...createTaskDto, userId })
  }

  @Get()
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "period", idParam: "periodId" })
  async findAll(
    @Request() req,
    @Query("filterByUser", ParseBoolPipe) filterByUser: boolean,
    @Query("periodId", ParseIntPipe) periodId: number,
  ) {
    const userId = req.user.id

    if (filterByUser) {
      return this.tasksService.findByUser(userId)
    }

    if (periodId) {
      return this.tasksService.findByPeriod(periodId)
    }

    if (req.user.isAdmin) {
      return this.tasksService.findAll()
    }

    throw new UnauthorizedException("You can't see all tasks, please filter by user or period")
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "task", idParam: "id" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.tasksService.findOne(id)
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "task", idParam: "id" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    return this.tasksService.update(id, updateTaskDto)
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "task", idParam: "id" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.tasksService.remove(id)
  }
}
