import { Module } from '@nestjs/common';
import { PokeService } from './poke.service';
import { PokeController } from './poke.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poke } from './entities/poke.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poke])],
  controllers: [PokeController],
  providers: [PokeService]
})
export class PokeModule {}
