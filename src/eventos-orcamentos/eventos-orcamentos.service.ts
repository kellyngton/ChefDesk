import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateEventosOrcamentoDto } from './dto/create-eventos-orcamento.dto';
import {
  EventoOrcamento,
  EventoOrcamentoDocument,
} from './schemas/evento-orcamento.schema';

@Injectable()
export class EventosOrcamentosService {
  constructor(
    @InjectModel(EventoOrcamento.name)
    private readonly eventoOrcamentoModel: Model<EventoOrcamentoDocument>,
  ) {}

  async create(createEventosOrcamentoDto: CreateEventosOrcamentoDto) {
    const evento = await this.eventoOrcamentoModel.create({
      idCliente: new Types.ObjectId(createEventosOrcamentoDto.idCliente),
      dataEvento: new Date(createEventosOrcamentoDto.dataEvento),
      cidade: createEventosOrcamentoDto.cidade,
      bairro: createEventosOrcamentoDto.bairro,
      tipoLocal: createEventosOrcamentoDto.tipoLocal,
      qtdPessoas: createEventosOrcamentoDto.qtdPessoas,
      ocasiao: createEventosOrcamentoDto.ocasiao,
      viabilidadeEstrutura: createEventosOrcamentoDto.viabilidadeEstrutura,
      restricoesAlimentares: createEventosOrcamentoDto.restricoesAlimentares,
      valorEstimadoTotal: createEventosOrcamentoDto.valorEstimadoTotal,
      status: createEventosOrcamentoDto.status,
    });

    return this.toResponse(evento);
  }

  private toResponse(evento: EventoOrcamentoDocument) {
    return {
      id: evento._id.toString(),
      idCliente: evento.idCliente.toString(),
      dataEvento: evento.dataEvento,
      cidade: evento.cidade,
      bairro: evento.bairro,
      tipoLocal: evento.tipoLocal,
      qtdPessoas: evento.qtdPessoas,
      ocasiao: evento.ocasiao,
      viabilidadeEstrutura: evento.viabilidadeEstrutura,
      restricoesAlimentares: evento.restricoesAlimentares,
      valorEstimadoTotal: evento.valorEstimadoTotal,
      status: evento.status,
    };
  }
}
