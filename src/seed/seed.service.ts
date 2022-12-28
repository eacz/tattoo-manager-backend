import { Injectable } from '@nestjs/common';
import { TattooService } from '../tattoo/tattoo.service';
import { tattooData } from './tattoo.seed';

@Injectable()
export class SeedService {
  constructor(private readonly tattooService: TattooService) {}
  async executeAllSeeds() {
    await this.tattooSeed();
    return 'All Seeds Executed';
  }

  async tattooSeed() {
    await this.tattooService.removeAll();
    const results = tattooData.map((tatto) => this.tattooService.create(tatto));
    await Promise.all(results);
    return 'Tattoo Seed Executed';
  }
}
