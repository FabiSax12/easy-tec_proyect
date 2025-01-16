import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { AuthGuard } from "./shared/guards/auth.guard"
import { ValidationPipe } from "@nestjs/common"
import { BadConnectionSimulatorInterceptor } from "./shared/interceptors/badConnectionSimulator.interceptor"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api")
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.useGlobalInterceptors(new BadConnectionSimulatorInterceptor())
  app.useGlobalGuards(app.get(AuthGuard))
  await app.listen(3000)
}
bootstrap()
