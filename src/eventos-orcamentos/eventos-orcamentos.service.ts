import { Injectable } from '@nestjs/common';
import { CreateEventosOrcamentoDto } from './dto/create-eventos-orcamento.dto';
import { UpdateEventosOrcamentoDto } from './dto/update-eventos-orcamento.dto';

@Injectable()
export class EventosOrcamentosService {
  create(createEventosOrcamentoDto: CreateEventosOrcamentoDto) {
    return 'This action adds a new eventosOrcamento';
  }

  findAll() {
    return `This action returns all eventosOrcamentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventosOrcamento`;
  }

  update(id: number, updateEventosOrcamentoDto: UpdateEventosOrcamentoDto) {
    return `This action updates a #${id} eventosOrcamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventosOrcamento`;
  }
}
