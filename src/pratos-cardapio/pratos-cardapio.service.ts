import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreatePratosCardapioDto } from './dto/create-pratos-cardapio.dto';
import { UpdatePratosCardapioDto } from './dto/update-pratos-cardapio.dto';
import { FilterPratosCardapioDto } from './dto/filter-pratos-cardapio.dto';
import {
  PratoCardapio,
  PratoCardapioDocument,
} from './schemas/prato-cardapio.schema';

@Injectable()
export class PratosCardapioService {
  constructor(
    @InjectModel(PratoCardapio.name)
    private readonly pratoCardapioModel: Model<PratoCardapioDocument>,
  ) {}

  async create(createPratosCardapioDto: CreatePratosCardapioDto) {
    const prato = await this.pratoCardapioModel.create({
      nome: createPratosCardapioDto.nome,
      categoria: createPratosCardapioDto.categoria,
      descricao: createPratosCardapioDto.descricao,
      status: createPratosCardapioDto.status ?? true,
    });

    return this.toResponse(prato);
  }

  async findAll(filters: FilterPratosCardapioDto) {
    const query: Record<string, unknown> = {
      status: true,
    };

    if (filters.categoria) {
      query.categoria = new RegExp(
        `^${this.escapeRegex(filters.categoria)}$`,
        'i',
      );
    }

    const pratos = await this.pratoCardapioModel
      .find(query)
      .sort({
        especialidadeEstrelada: -1,
        nome: 1,
      })
      .exec();

    return {
      data: pratos.map((prato) => this.toResponse(prato)),
    };
  }

  async findOne(id: string) {
    this.validateObjectId(id);

    const prato = await this.pratoCardapioModel.findById(id).exec();

    if (!prato) {
      throw new NotFoundException('Prato não encontrado');
    }

    return this.toResponse(prato);
  }

  async update(id: string, updatePratosCardapioDto: UpdatePratosCardapioDto) {
    this.validateObjectId(id);

    const prato = await this.pratoCardapioModel
      .findByIdAndUpdate(id, updatePratosCardapioDto, {
        new: true,
      })
      .exec();

    if (!prato) {
      throw new NotFoundException('Prato não encontrado');
    }

    return this.toResponse(prato);
  }

  async remove(id: string) {
    this.validateObjectId(id);

    const prato = await this.pratoCardapioModel.findByIdAndDelete(id).exec();

    if (!prato) {
      throw new NotFoundException('Prato não encontrado');
    }

    return {
      message: 'Prato removido com sucesso',
    };
  }

  private toResponse(prato: PratoCardapioDocument) {
    return {
      id: prato._id.toString(),
      nome: prato.nome,
      categoria: prato.categoria,
      descricao: prato.descricao,
      status: prato.status,
      especialidadeEstrelada: prato.especialidadeEstrelada,
    };
  }

  private validateObjectId(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID inválido');
    }
  }

  private escapeRegex(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
