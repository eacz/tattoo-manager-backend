import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { TattooService } from './tattoo.service';
import { CreateTattooDto } from './dto/create-tattoo.dto';
import { UpdateTattooDto } from './dto/update-tattoo.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parseMongoId.pipe';
import { FindManyTattooDto } from './dto/find-many-tattoo.dto';
import { GetTattosaByDate } from './dto/get-tattos-by-date.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from '../common/files.service';
import { fileExtensionFilter } from 'src/common/filters/fileExtension.filter';

@Controller('tattoo')
export class TattooController {
  constructor(
    private readonly tattooService: TattooService,
    private readonly filesService: FilesService,
  ) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 3, {
      fileFilter: fileExtensionFilter,
    }),
  )
  async create(
    @Body() createTattooDto: CreateTattooDto,
    //uploadedFiles currently is broken and doesn't work with pipes
    //new ParseFilePipe({
    //  validators: [new MaxFileSizeValidator({ maxSize: 5000000 })],
    //}),
    @UploadedFiles()
    images: Array<Express.Multer.File>,
  ) {
    if (images) {
      const imagesUrls: string[] = [];

      for (let i = 0; i < images.length; i++) {
        const image = await this.filesService.uploadImage(images[i]);
        imagesUrls.push(image.secure_url);
      }

      createTattooDto.images = imagesUrls;
    }
    return this.tattooService.create(createTattooDto);
  }

  @Get()
  getMany(@Query() findManyTattooDto: FindManyTattooDto) {
    return this.tattooService.getMany(findManyTattooDto);
  }

  @Get('by-date')
  getByDate(@Query() getTattosaByDate: GetTattosaByDate) {
    return this.tattooService.getTattosByDate(getTattosaByDate);
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
