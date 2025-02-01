import { Module } from '@nestjs/common';
import { UserPeriodsService } from './user-periods.service';
import { UserPeriodsController } from './user-periods.controller';

@Module({
  controllers: [UserPeriodsController],
  providers: [UserPeriodsService]
})
export class UserPeriodsModule {}
