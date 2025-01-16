import { join } from "path"
import { MiddlewareConsumer, Module } from "@nestjs/common"
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
import { PrismaModule } from "./prisma/prisma.module"
import { UserPeriodsModule } from "./user-periods/user-periods.module"
import { AuthMiddleware } from "./shared/middlewares/auth.middleware"
import { LoggerMiddleware } from "./shared/middlewares/logger.middleware"
import { RateLimitMiddleware } from "./shared/middlewares/rateLimit.middleware"

const serveClient = ServeStaticModule.forRoot({
  rootPath: join(__dirname, "../..", "client/dist")
})

@Module({
  imports: [
    serveClient,
    PrismaModule,
    UsersModule,
    PeriodsModule,
    CoursesModule,
    TasksModule,
    AuthModule,
    SchedulesModule,
    UserPeriodsModule,
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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, RateLimitMiddleware)
      .forRoutes("*")
      .apply(AuthMiddleware)
      .exclude("auth/*")
      .forRoutes("*")
  }
}
