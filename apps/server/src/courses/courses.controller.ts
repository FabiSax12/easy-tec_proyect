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
  DefaultValuePipe,
  ForbiddenException,
  Req
} from "@nestjs/common"
import { CoursesService } from "./courses.service"
import { CreateCourseDto } from "./dto/create-course.dto"
import { UpdateCourseDto } from "./dto/update-course.dto"
import { AuthGuard } from "../shared/guards/auth.guard"
import { ValidateOwnership } from "../shared/decorators/validateOwnership.decorator"
import { UsersService } from "../users/users.service"
import { OwnershipGuard } from "../shared/guards/ownership.guard"

@Controller("courses")
@UseGuards(AuthGuard)
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly usersService: UsersService
  ) { }

  @Post()
  @UseGuards(OwnershipGuard)
  @ValidateOwnership({ type: "period", idBody: "periodId" })
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto)
  }

  @Get()
  async findAll(
    @Request() req,
    @Query("filterByUser", new DefaultValuePipe(false), ParseBoolPipe) filterByUser?: boolean,
    @Query("periodId") periodId?: string
  ) {
    const userId = req.user.id

    if (filterByUser) {
      return this.coursesService.findCourses({ userId })
    }

    if (periodId) {
      await this.ensureUserHasAccessToPeriod(userId, +periodId)
      return this.coursesService.findCourses({ periodId: +periodId })
    }

    return this.coursesService.findAll()
  }

  @Get(":id")
  @ValidateOwnership({ type: "course", idParam: "id" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.coursesService.findOne(id)
  }

  @Patch(":id")
  @ValidateOwnership({ type: "course", idParam: "id" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto
  ) {
    return this.coursesService.update(id, updateCourseDto)
  }

  @Delete(":id")
  @ValidateOwnership({ type: "course", idParam: "id" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.coursesService.remove(id)
  }

  private async ensureUserHasAccessToPeriod(userId: number, periodId: number) {
    const hasAccess = await this.usersService.isUserPeriod(userId, periodId)
    if (!hasAccess) {
      throw new ForbiddenException("User does not have access to this period")
    }
  }
}
