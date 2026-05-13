import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateClienteDto) {
    return this.prisma.cliente.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.cliente.findMany({
      orderBy: {
        idCliente: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        idCliente: id,
      },
      include: {
        eventos: true,
      },
    });

    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return cliente;
  }

  async update(id: number, dto: UpdateClienteDto) {
    await this.findOne(id);

    return this.prisma.cliente.update({
      where: {
        idCliente: id,
      },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.cliente.delete({
      where: {
        idCliente: id,
      },
    });
  }
}
