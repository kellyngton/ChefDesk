import { PartialType } from '@nestjs/swagger';
import { CreateEscolhasMenuDto } from './create-escolhas-menu.dto';

export class UpdateEscolhasMenuDto extends PartialType(CreateEscolhasMenuDto) {}
