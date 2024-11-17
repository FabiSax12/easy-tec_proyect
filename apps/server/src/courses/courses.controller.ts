import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common"
import { CoursesService } from "./courses.service"
import { CreateCourseDto } from "./dto/create-course.dto"
import { UpdateCourseDto } from "./dto/update-course.dto"

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto)
  }

  @Get()
  async findAll(
    @Query("user") user: string,
    @Query("period") period: string
  ) {
    if (!user && !period) return this.coursesService.findAll()

    if (user && period) return this.coursesService.findByUserAndPeriod(+user, period)
    if (user) return this.coursesService.findByUser(+user)
    if (period) return this.coursesService.findByPeriod(period)
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.coursesService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coursesService.remove(+id)
  }

  @Get(":id")
  findByUser(@Param("id") id: string) {
    return this.coursesService.findByUser(+id)
  }
}
