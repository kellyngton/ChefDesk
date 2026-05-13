import { PartialType } from '@nestjs/swagger';
import { CreateEventosOrcamentoDto } from './create-eventos-orcamento.dto';

export class UpdateEventosOrcamentoDto extends PartialType(
  CreateEventosOrcamentoDto,
) {}
