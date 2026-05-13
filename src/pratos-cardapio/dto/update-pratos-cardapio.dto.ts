import { PartialType } from '@nestjs/mapped-types';
import { CreatePratoCardapioDto } from './create-pratos-cardapio.dto';

export class UpdatePratoCardapioDto extends PartialType(
  CreatePratoCardapioDto,
) {}
