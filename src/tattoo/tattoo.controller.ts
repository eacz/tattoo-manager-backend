import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TattooService } from './tattoo.service';
import { CreateTattooDto } from './dto/create-tattoo.dto';
import { UpdateTattooDto } from './dto/update-tattoo.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parseMongoId.pipe';

@Controller('tattoo')
export class TattooController {
  constructor(private readonly tattooService: TattooService) {}

  @Post()
  create(@Body() createTattooDto: CreateTattooDto) {
    return this.tattooService.create(createTattooDto);
  }

  @Get()
  getMany() {
    return this.tattooService.getMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.tattooService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateTattooDto: UpdateTattooDto,
  ) {
    return this.tattooService.update(id, updateTattooDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.tattooService.remove(id);
  }
}