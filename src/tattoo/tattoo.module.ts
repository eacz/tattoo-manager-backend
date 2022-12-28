import { Module } from '@nestjs/common';
import { TattooService } from './tattoo.service';
import { TattooController } from './tattoo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tattoo, TattooSchema } from './entities/tattoo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tattoo.name, schema: TattooSchema }]),
  ],
  controllers: [TattooController],
  providers: [TattooService],
  exports: [TattooService, MongooseModule],
})
export class TattooModule {}
