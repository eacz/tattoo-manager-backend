import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTattooDto {
  @IsString()
  client: string;

  @IsNumber()
  price: number;

  @IsDate()
  @Type(() => Date)
  day: Date;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  clientContact?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @IsBoolean()
  @IsOptional()
  hasPayedAdvancedDeposit?: boolean;

  @IsNumber()
  @IsOptional()
  advancedDepositAmount?: number;

  @IsBoolean()
  @IsOptional()
  done?: boolean;

  @IsNumber()
  @IsOptional()
  hours?: number;
}
