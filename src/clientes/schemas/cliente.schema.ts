import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;

@Schema({
  timestamps: true,
  collection: 'clientes',
})
export class Cliente {
  @Prop({
    required: true,
    maxlength: 100,
  })
  nome!: string;

  @Prop({
    required: true,
    maxlength: 100,
    lowercase: true,
    trim: true,
  })
  email!: string;

  @Prop({
    required: false,
    maxlength: 20,
  })
  telefone?: string;

  @Prop({
    default: true,
  })
  status!: boolean;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
