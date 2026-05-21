import { PartialType } from '@nestjs/mapped-types';
import { CreatePratosCardapioDto } from './create-pratos-cardapio.dto';

export class UpdatePratosCardapioDto extends PartialType(
  CreatePratosCardapioDto,
) {}
