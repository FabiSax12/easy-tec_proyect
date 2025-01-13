import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from "@nestjs/common"
import { PeriodsService } from "./periods.service"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { PeriodFilterDto } from "./dto/period-filter.dto"
import { AuthGuard } from "src/auth/auth.guard"

@Controller("periods")
export class PeriodsController {
  constructor(private readonly periodsService: PeriodsService) { }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createAcademicPeriodDto: CreatePeriodDto) {
    return this.periodsService.create(createAcademicPeriodDto)
  }

  @Get()
  findAll(@Query() query: PeriodFilterDto) {
    if (query.userId) return this.periodsService.findByUser(query.userId)
    return this.periodsService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.periodsService.findOne(+id)
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  update(@Param("id") id: string, @Body() updateAcademicPeriodDto: UpdatePeriodDto) {
    return this.periodsService.update(+id, updateAcademicPeriodDto)
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  remove(@Param("id") id: string) {
    return this.periodsService.remove(+id)
  }

  @Get("user/:id")
  findByUser(@Param("id") id: string) {
    return this.periodsService.findByUser(+id)
  }
}
