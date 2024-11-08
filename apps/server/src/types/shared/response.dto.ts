import { HttpStatus } from "@nestjs/common"

export class ResponseDto<T> {
  statusCode: HttpStatus
  message: string
  data?: T
  error?: any
}