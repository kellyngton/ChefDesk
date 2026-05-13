import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosOrcamentosService } from './eventos-orcamentos.service';
import { CreateEventosOrcamentoDto } from './dto/create-eventos-orcamento.dto';
import { UpdateEventosOrcamentoDto } from './dto/update-eventos-orcamento.dto';

@Controller('eventos-orcamentos')
export class EventosOrcamentosController {
  constructor(private readonly eventosOrcamentosService: EventosOrcamentosService) {}

  @Post()
  create(@Body() createEventosOrcamentoDto: CreateEventosOrcamentoDto) {
    return this.eventosOrcamentosService.create(createEventosOrcamentoDto);
  }

  @Get()
  findAll() {
    return this.eventosOrcamentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosOrcamentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventosOrcamentoDto: UpdateEventosOrcamentoDto) {
    return this.eventosOrcamentosService.update(+id, updateEventosOrcamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosOrcamentosService.remove(+id);
  }
}
