import { Test, TestingModule } from '@nestjs/testing';
import { PratosCardapioService } from './pratos-cardapio.service';

describe('PratosCardapioService', () => {
  let service: PratosCardapioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PratosCardapioService],
    }).compile();

    service = module.get<PratosCardapioService>(PratosCardapioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
