import { Test, TestingModule } from '@nestjs/testing';
import { EventosOrcamentosService } from './eventos-orcamentos.service';

describe('EventosOrcamentosService', () => {
  let service: EventosOrcamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventosOrcamentosService],
    }).compile();

    service = module.get<EventosOrcamentosService>(EventosOrcamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
