import { Module } from "@nestjs/common"
import { CoursesService } from "./courses.service"
import { CoursesController } from "./courses.controller"
import { PrismaService } from "src/prisma/prisma.service"
import { UsersService } from "src/users/users.service"

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService, UsersService]
})
export class CoursesModule { }
