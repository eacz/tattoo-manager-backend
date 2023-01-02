import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Injectable()
export class FilesService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  async uploadImage(file: Express.Multer.File) {
    try {
      console.log({ file });
      const fileUploaded = await this.cloudinaryService.uploadImage(file);
      console.log(fileUploaded);
      return fileUploaded;
    } catch (error) {
      console.log(error);
      throw new ServiceUnavailableException(
        `There was a problem with the file upload provider, please try again later`,
      );
    }
  }
}
