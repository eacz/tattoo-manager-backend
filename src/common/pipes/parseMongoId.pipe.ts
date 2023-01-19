import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isObjectIdOrHexString } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!isObjectIdOrHexString(value)) {
      throw new BadRequestException(`${metadata.data} is not a valid mongoId`);
    }

    return value;
  }
}
