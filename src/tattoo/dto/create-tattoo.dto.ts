import { Type } from 'class-transformer';
import {
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

  @IsString()
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsOptional()
  hasPayedAdvancedDeposit?: boolean;

  @IsNumber()
  @IsOptional()
  advancedDepositAmount?: number;
}
