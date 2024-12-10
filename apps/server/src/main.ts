import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, ValidationPipe } from "@nestjs/common"
import { Observable } from "rxjs"

@Injectable()
class BadConnectionSimulatorInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return next.handle()
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api")
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.useGlobalInterceptors(new BadConnectionSimulatorInterceptor())
  await app.listen(3000)
}
bootstrap()
