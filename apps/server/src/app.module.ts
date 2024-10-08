import { join } from "path"
import { Module } from "@nestjs/common"
import { ServeStaticModule } from "@nestjs/serve-static"
import { UsersModule } from "./users/users.module"
import { PeriodsModule } from "./periods/periods.module"
import { CoursesModule } from "./courses/courses.module"
import { TasksModule } from "./tasks/tasks.module"

const serveClient = ServeStaticModule.forRoot({
  rootPath: join(__dirname, "../..", "client/dist")
})

@Module({
  imports: [serveClient, UsersModule, PeriodsModule, CoursesModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
