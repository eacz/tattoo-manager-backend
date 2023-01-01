import { Module } from '@nestjs/common';
import { TattooService } from './tattoo.service';
import { TattooController } from './tattoo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tattoo, TattooSchema } from './entities/tattoo.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tattoo.name, schema: TattooSchema }]),
    CommonModule,
  ],
  controllers: [TattooController],
  providers: [TattooService],
  exports: [TattooService, MongooseModule],
})
export class TattooModule {}
