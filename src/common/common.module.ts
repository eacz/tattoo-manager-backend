import { Module } from '@nestjs/common';
import { DatesService } from './dates.service';

@Module({
  controllers: [],
  providers: [DatesService],
  exports: [DatesService],
})
export class CommonModule {}
