import { Body, Controller, Post } from '@nestjs/common';
import { EventosOrcamentosService } from './eventos-orcamentos.service';
import { CreateEventosOrcamentoDto } from './dto/create-eventos-orcamento.dto';

@Controller('eventos-orcamentos')
export class EventosOrcamentosController {
  constructor(
    private readonly eventosOrcamentosService: EventosOrcamentosService,
  ) {}

  @Post()
  create(@Body() createEventosOrcamentoDto: CreateEventosOrcamentoDto) {
    return this.eventosOrcamentosService.create(createEventosOrcamentoDto);
  }
}
