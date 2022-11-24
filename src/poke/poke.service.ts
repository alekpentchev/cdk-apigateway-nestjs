import { Injectable } from '@nestjs/common';
import { CreatePokeDto } from './dto/create-poke.dto';
import { UpdatePokeDto } from './dto/update-poke.dto';
import { Repository } from 'typeorm';
import { Poke } from './entities/poke.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PokeService {
  constructor(
    @InjectRepository(Poke) private pokeRepository: Repository<Poke>,
  ) {}

  async create(createPokeDto: CreatePokeDto) {
    return await this.pokeRepository.save(createPokeDto);
  }

  async findAll() {
    return await this.pokeRepository.find();
  }

  async findOne(id: number) {
    return this.pokeRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePokeDto: UpdatePokeDto) {
    return this.pokeRepository.update(id, updatePokeDto);
  }

  remove(id: number) {
    return this.pokeRepository.delete(id);
  }
}
