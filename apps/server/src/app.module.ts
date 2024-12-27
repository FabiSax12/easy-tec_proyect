import { join } from "path"
import { Module } from "@nestjs/common"
import { ServeStaticModule } from "@nestjs/serve-static"
import { MailerModule } from "@nestjs-modules/mailer"
import { UsersModule } from "./users/users.module"
import { PeriodsModule } from "./periods/periods.module"
import { CoursesModule } from "./courses/courses.module"
import { TasksModule } from "./tasks/tasks.module"
import { AuthModule } from "./auth/auth.module"
import { SchedulesModule } from "./schedules/schedules.module"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter"

const serveClient = ServeStaticModule.forRoot({
  rootPath: join(__dirname, "../..", "client/dist")
})

@Module({
  imports: [
    serveClient,
    UsersModule,
    PeriodsModule,
    CoursesModule,
    TasksModule,
    AuthModule,
    SchedulesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get("MAILER_HOST"),
          port: configService.get("MAILER_PORT"),
          secure: true,
          auth: {
            user: configService.get("MAILER_USER"),
            pass: configService.get("MAILER_PASSWORD")
          }
        },
        defaults: {
          from: `\"No Reply\" <${configService.get("MAILER_EMAIL")}>`,
        },
        template: {
          dir: process.cwd() + "/templates",
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          }
        }
      })
    })
  ]
})
export class AppModule { }
