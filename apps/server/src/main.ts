import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import * as cookieParser from "cookie-parser"
import { AppModule } from "./app.module"
import { BadConnectionSimulatorInterceptor } from "./shared/interceptors/badConnectionSimulator.interceptor"
import { LoggerInterceptor } from "./shared/interceptors/logger.interceptor"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api")

  app.use(cookieParser())
  app.useGlobalInterceptors(new BadConnectionSimulatorInterceptor())
  app.useGlobalInterceptors(new LoggerInterceptor())
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  app.enableCors()
  await app.listen(3000)
}
bootstrap()
