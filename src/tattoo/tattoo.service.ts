import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTattooDto } from './dto/create-tattoo.dto';
import { FindManyTattooDto } from './dto/find-many-tattoo.dto';
import { UpdateTattooDto } from './dto/update-tattoo.dto';
import { Tattoo } from './entities/tattoo.entity';
import { GetTattosaByDate } from './dto/get-tattos-by-date.dto';
import { DatesService } from '../common/dates.service';

@Injectable()
export class TattooService {
  constructor(
    @InjectModel(Tattoo.name) private readonly tattooModel: Model<Tattoo>,
    private readonly datesService: DatesService,
  ) {}

  async create(createTattooDto: CreateTattooDto) {
    const tattoo = await this.tattooModel.create(createTattooDto);

    return tattoo;
  }

  async getMany(findManyTattooDto: FindManyTattooDto) {
    const { limit = 10, offset = 0, done } = findManyTattooDto;
    const query: any = {};
    if (typeof done === 'boolean') {
      query.done = done;
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

  async removeAll() {
    await this.tattooModel.deleteMany();
  }

  async getTattosByDate(getTattosByDate: GetTattosaByDate) {
    const { date, limit, offset } = getTattosByDate;
    const startTime = this.datesService.formatHourToZero(date);
    const endTime = this.datesService.addOne(
      this.datesService.formatHourToZero(date),
      'days',
      1,
    );

    const tattos = await this.tattooModel
      .find({
        day: {
          $gte: startTime,
          $lt: endTime,
        },
      })
      .limit(limit)
      .skip(offset);

    return tattos;
  }
}
