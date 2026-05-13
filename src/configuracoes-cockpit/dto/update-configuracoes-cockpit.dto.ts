import { PartialType } from '@nestjs/swagger';
import { CreateConfiguracoesCockpitDto } from './create-configuracoes-cockpit.dto';

export class UpdateConfiguracoesCockpitDto extends PartialType(
  CreateConfiguracoesCockpitDto,
) {}
