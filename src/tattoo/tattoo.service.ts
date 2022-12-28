import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTattooDto } from './dto/create-tattoo.dto';
import { FindManyTattooDto } from './dto/find-many-tattoo.dto';
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

  async getMany(findManyTattooDto: FindManyTattooDto) {
    const { limit = 10, offset = 0, done } = findManyTattooDto;
    console.log({ done });
    const query: any = {};
    if (typeof done === 'boolean') {
      query.done = done;
      console.log('boolean');
    }

    const tattos = await this.tattooModel
      .find(query)
      .limit(limit)
      .skip(offset)
      .select('-__v');
    return tattos;
  }

  async findOne(id: string) {
    const tattoo = await this.tattooModel.findById(id);

    if (!tattoo) {
      throw new NotFoundException(`There is no tattoo with id ${id}`);
    }

    return tattoo;
  }

  async update(id: string, updateTattooDto: UpdateTattooDto) {
    const tattoo = await this.findOne(id);
    //TODO: validar fecha de turno al actualizar
    await tattoo.updateOne(updateTattooDto);
    return { ...tattoo.toJSON(), ...updateTattooDto };
  }

  async remove(id: string) {
    const { deletedCount } = await this.tattooModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new NotFoundException(`There is no tattoo with id ${id}`);
    }
    return;
  }
}
