import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common"
import { PeriodsService } from "./periods.service"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { PeriodFilterDto } from "./dto/period-filter.dto"

@Controller("periods")
export class PeriodsController {
  constructor(private readonly academicPeriodService: PeriodsService) { }

  @Post()
  create(@Body() createAcademicPeriodDto: CreatePeriodDto) {
    return this.academicPeriodService.create(createAcademicPeriodDto)
  }

  @Get()
  findAll(@Query() query: PeriodFilterDto) {
    if (query.userId) return this.academicPeriodService.findByUser(query.userId)
    return this.academicPeriodService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.academicPeriodService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAcademicPeriodDto: UpdatePeriodDto) {
    return this.academicPeriodService.update(+id, updateAcademicPeriodDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.academicPeriodService.remove(+id)
  }

  @Get("user/:id")
  findByUser(@Param("id") id: string) {
    return this.academicPeriodService.findByUser(+id)
  }
}
