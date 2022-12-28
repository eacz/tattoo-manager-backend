import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class FindManyTattooDto extends PartialType(PaginationDto) {
  @IsBoolean()
  @IsOptional()
  @Transform(({ obj, key }) => obj[key] === 'true')
  done?: boolean;
}
