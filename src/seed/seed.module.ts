import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TattooModule } from '../tattoo/tattoo.module';

@Module({
  imports: [TattooModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
