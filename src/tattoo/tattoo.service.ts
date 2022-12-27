import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTattooDto } from './dto/create-tattoo.dto';
import { UpdateTattooDto } from './dto/update-tattoo.dto';
import { Tattoo } from './entities/tattoo.entity';

@Injectable()
export class TattooService {
  constructor(
    @InjectModel(Tattoo.name) private readonly tattooModel: Model<Tattoo>,
  ) {}

  async create(createTattooDto: CreateTattooDto) {
    const tattoo = await this.tattooModel.create(createTattooDto);

    return tattoo;
  }

  getMany() {
    return `This action returns all tattoo`;
  }

  findOne(id: string) {
    return `This action returns a #${id} tattoo`;
  }

  update(id: string, updateTattooDto: UpdateTattooDto) {
    return `This action updates a #${id} tattoo`;
  }

  remove(id: string) {
    return `This action removes a #${id} tattoo`;
  }
}
