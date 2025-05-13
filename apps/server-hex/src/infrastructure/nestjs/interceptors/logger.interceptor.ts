import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common"
import { Request, Response } from "express"
import { catchError, Observable, tap, throwError } from "rxjs"

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggerInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest() as Request
    const controller = context.getClass().name
    const handler = context.getHandler().name


    const { method, path } = req

    this.logger.log(`Request... ${method} ${path}: ${controller} ${handler}`)

    const requestTime = Date.now()

    return next.handle().pipe(
      tap((response) => {

        const res = context.switchToHttp().getResponse() as Response

        const { statusCode } = res
        const contentLength = res.get("content-length")

        this.logger.log(`
          Response... ${method} ${path} ${statusCode} ${contentLength}: ${Date.now() - requestTime}ms
        `)

        this.logger.debug("Response: " + JSON.stringify(response))
      }),
      catchError((err) => {
        this.logger.error(err)
        return throwError(() => err)
      }),
    )
  }
}