import { PartialType } from "@nestjs/mapped-types"
import { CreateUserPeriodDto } from "./create-user-period.dto"

export class UpdateUserPeriodDto extends PartialType(CreateUserPeriodDto) {}
