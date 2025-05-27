import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import cookieParser from "cookie-parser"
import { AppModule } from "./app.module"
import { BadConnectionSimulatorInterceptor } from "./shared/interceptors/badConnectionSimulator.interceptor"
import { LoggerInterceptor } from "./shared/interceptors/logger.interceptor"

async function bootstrap() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api")

  app.use(cookieParser())
  app.useGlobalInterceptors(new BadConnectionSimulatorInterceptor())
  app.useGlobalInterceptors(new LoggerInterceptor())
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  app.enableCors()
  const port = process.env.PORT || 3000
  await app.listen(port)
}
bootstrap()
