import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class GetTattosaByDate extends PartialType(PaginationDto) {
  @IsDate()
  @Type(() => Date)
  date: Date;
}
