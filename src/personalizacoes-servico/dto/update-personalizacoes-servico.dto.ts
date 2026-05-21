import { PartialType } from '@nestjs/swagger';
import { CreatePersonalizacoesServicoDto } from './create-personalizacoes-servico.dto';

export class UpdatePersonalizacoesServicoDto extends PartialType(
  CreatePersonalizacoesServicoDto,
) {}
