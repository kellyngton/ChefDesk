import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEventosOrcamentoDto {
  @ApiProperty({
    example: '665f1c7a0e8e4a7a8f2d1234',
    description: 'ID do cliente no MongoDB',
  })
  @IsMongoId()
  idCliente!: string;

  @ApiProperty({
    example: '2025-08-15',
    description: 'Data do evento',
  })
  @IsDateString()
  dataEvento!: string;

  @ApiProperty({
    example: 'São Paulo',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  cidade!: string;

  @ApiPropertyOptional({
    example: 'Moema',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  bairro?: string;

  @ApiProperty({
    example: 'Salão de festas',
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipoLocal!: string;

  @ApiProperty({
    example: 80,
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  qtdPessoas!: number;

  @ApiPropertyOptional({
    example: 'Casamento',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  ocasiao?: string;

  @ApiPropertyOptional({
    example: 'Local possui cozinha e área de apoio',
  })
  @IsOptional()
  @IsString()
  viabilidadeEstrutura?: string;

  @ApiPropertyOptional({
    example: 'Sem glúten, sem lactose',
  })
  @IsOptional()
  @IsString()
  restricoesAlimentares?: string;

  @ApiProperty({
    example: 12000,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  valorEstimadoTotal!: number;

  @ApiProperty({
    example: 'rascunho',
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  status!: string;
}
