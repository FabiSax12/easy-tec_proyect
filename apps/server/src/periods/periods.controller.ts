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
  ParseIntPipe,
  ParseBoolPipe,
} from "@nestjs/common"
import { PeriodsService } from "./periods.service"
import { CreatePeriodDto } from "./dto/create-period.dto"
import { UpdatePeriodDto } from "./dto/update-period.dto"
import { AuthGuard } from "src/shared/guards/auth.guard"
import { ValidateOwnership } from "src/shared/decorators/validateOwnership.decorator"
import { AdminGuard } from "src/shared/guards/admin.guard"

@Controller("periods")
export class PeriodsController {
  constructor(private readonly periodsService: PeriodsService) { }

  /**
   * For Admins Only
   */
  @Post()
  @UseGuards(AdminGuard)
  async create(@Body() createPeriodDto: CreatePeriodDto) {
    return this.periodsService.create(createPeriodDto)
  }

  @Patch(":id")
  @UseGuards(AdminGuard)
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updatePeriodDto: UpdatePeriodDto
  ) {
    return this.periodsService.update(id, updatePeriodDto)
  }

  @Delete(":id")
  @UseGuards(AdminGuard)
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.periodsService.remove(id)
  }

  /**
   * For All Users
   */
  @Get()
  @UseGuards(AuthGuard)
  async findAll(
    @Request() req,
    @Query("filterByUser", ParseBoolPipe) filterByUser?: boolean
  ) {
    const userId = req.user.id

    if (filterByUser) {
      return this.periodsService.findByUser(userId)
    }

    return this.periodsService.findAll()
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  @ValidateOwnership({ type: "period", idParam: "id" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.periodsService.findOne(id)
  }
}
