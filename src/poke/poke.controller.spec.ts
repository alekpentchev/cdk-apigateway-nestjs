import { Test, TestingModule } from '@nestjs/testing';
import { PokeController } from './poke.controller';
import { PokeService } from './poke.service';

describe('PokeController', () => {
  let controller: PokeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokeController],
      providers: [PokeService],
    }).compile();

    controller = module.get<PokeController>(PokeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
