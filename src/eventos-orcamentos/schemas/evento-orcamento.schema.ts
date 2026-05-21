import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type EventoOrcamentoDocument = HydratedDocument<EventoOrcamento>;

@Schema({
  timestamps: true,
  collection: 'eventos_orcamentos',
})
export class EventoOrcamento {
  @Prop({
    type: Types.ObjectId,
    ref: 'Cliente',
    required: true,
  })
  idCliente!: Types.ObjectId;

  @Prop({
    required: true,
  })
  dataEvento!: Date;

  @Prop({
    required: true,
    maxlength: 100,
  })
  cidade!: string;

  @Prop({
    maxlength: 100,
  })
  bairro?: string;

  @Prop({
    required: true,
    maxlength: 50,
  })
  tipoLocal!: string;

  @Prop({
    required: true,
    min: 1,
  })
  qtdPessoas!: number;

  @Prop({
    maxlength: 100,
  })
  ocasiao?: string;

  @Prop()
  viabilidadeEstrutura?: string;

  @Prop()
  restricoesAlimentares?: string;

  @Prop({
    required: true,
    min: 0,
  })
  valorEstimadoTotal!: number;

  @Prop({
    required: true,
    maxlength: 50,
    default: 'rascunho',
  })
  status!: string;
}

export const EventoOrcamentoSchema =
  SchemaFactory.createForClass(EventoOrcamento);
