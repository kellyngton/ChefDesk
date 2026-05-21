import { Test, TestingModule } from '@nestjs/testing';
import { EventosOrcamentosController } from './eventos-orcamentos.controller';
import { EventosOrcamentosService } from './eventos-orcamentos.service';

describe('EventosOrcamentosController', () => {
  let controller: EventosOrcamentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventosOrcamentosController],
      providers: [EventosOrcamentosService],
    }).compile();

    controller = module.get<EventosOrcamentosController>(EventosOrcamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
