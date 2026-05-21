/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateConfiguracoesCockpitDto } from './dto/create-configuracoes-cockpit.dto';
import { UpdateConfiguracoesCockpitDto } from './dto/update-configuracoes-cockpit.dto';

@Injectable()
export class ConfiguracoesCockpitService {
  create(createConfiguracoesCockpitDto: CreateConfiguracoesCockpitDto) {
    return 'This action adds a new configuracoesCockpit';
  }

  findAll() {
    return `This action returns all configuracoesCockpit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configuracoesCockpit`;
  }

  update(
    id: number,
    updateConfiguracoesCockpitDto: UpdateConfiguracoesCockpitDto,
  ) {
    return `This action updates a #${id} configuracoesCockpit`;
  }

  remove(id: number) {
    return `This action removes a #${id} configuracoesCockpit`;
  }
}
