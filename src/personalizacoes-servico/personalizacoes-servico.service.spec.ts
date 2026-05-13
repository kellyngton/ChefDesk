import { Test, TestingModule } from '@nestjs/testing';
import { PersonalizacoesServicoService } from './personalizacoes-servico.service';

describe('PersonalizacoesServicoService', () => {
  let service: PersonalizacoesServicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalizacoesServicoService],
    }).compile();

    service = module.get<PersonalizacoesServicoService>(PersonalizacoesServicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
