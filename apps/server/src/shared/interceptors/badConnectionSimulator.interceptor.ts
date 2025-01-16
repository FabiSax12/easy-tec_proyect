import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { Observable } from "rxjs"

@Injectable()
export class BadConnectionSimulatorInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return next.handle()
  }
}