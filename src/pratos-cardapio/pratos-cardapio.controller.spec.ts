import { Test, TestingModule } from '@nestjs/testing';
import { PratosCardapioController } from './pratos-cardapio.controller';
import { PratosCardapioService } from './pratos-cardapio.service';

describe('PratosCardapioController', () => {
  let controller: PratosCardapioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PratosCardapioController],
      providers: [PratosCardapioService],
    }).compile();

    controller = module.get<PratosCardapioController>(PratosCardapioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
