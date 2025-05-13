import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { AppModule } from "./app.module"

async function bootstrap() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api")

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  app.enableCors()
  await app.listen(3000)
}
bootstrap()
