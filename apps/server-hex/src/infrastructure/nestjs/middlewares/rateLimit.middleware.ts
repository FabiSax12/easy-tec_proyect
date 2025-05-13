import { Injectable, NestMiddleware, HttpException, HttpStatus } from "@nestjs/common"

const requestCounts = new Map<string, number>()

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const ip = req.ip
    const count = requestCounts.get(ip) || 0

    if (count > 100) {
      throw new HttpException(
        "Too Many Requests",
        HttpStatus.TOO_MANY_REQUESTS,
      )
    }

    requestCounts.set(ip, count + 1)
    setTimeout(() => requestCounts.set(ip, count - 1), 60000)
    next()
  }
}
