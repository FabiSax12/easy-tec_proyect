import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
  ParseBoolPipe,
  ParseIntPipe,
  UnauthorizedException,
} from "@nestjs/common"
import { CoursesService } from "./courses.service"
import { CreateCourseDto } from "./dto/create-course.dto"
import { UpdateCourseDto } from "./dto/update-course.dto"
import { AuthGuard } from "src/shared/guards/auth.guard"
import { ValidateOwnership } from "src/shared/decorators/validateOwnership.decorator"
import { UsersService } from "src/users/users.service"

@Controller("courses")
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly usersService: UsersService
  ) { }

  @Post()
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "period", idBody: "periodId" })
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto)
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(
    @Request() req,
    @Query("filterByUser", ParseBoolPipe) filterByUser?: boolean,
    @Query("periodId", ParseIntPipe) periodId?: number
  ) {
    const userId = req.user.id

    if (filterByUser) {
      return this.coursesService.findByUser(userId)
    }

    if (periodId) {
      const hasAccess = await this.usersService.isUserPeriod(userId, periodId)
      if (!hasAccess) {
        throw new UnauthorizedException("User does not have access to this period")
      }
      return this.coursesService.findByPeriodId(periodId)
    }

    return this.coursesService.findAll()
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "course", idParam: "id" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.coursesService.findOne(id)
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "course", idParam: "id" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto
  ) {
    return this.coursesService.update(id, updateCourseDto)
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "course", idParam: "id" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.coursesService.remove(id)
  }
}