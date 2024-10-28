import { Module } from "@nestjs/common"
import { PeriodsService } from "./periods.service"
import { PeriodsController } from "./periods.controller"
import { PrismaService } from "src/prisma/prisma.service"

@Module({
  controllers: [PeriodsController],
  providers: [PeriodsService, PrismaService]
})
export class PeriodsModule { }
