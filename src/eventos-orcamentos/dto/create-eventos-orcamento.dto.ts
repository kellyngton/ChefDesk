import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEventosOrcamentoDto {
  @IsInt()
  idCliente!: number;

  @IsDateString()
  dataEvento!: string;

  @IsString()
  @MaxLength(100)
  cidade!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  bairro?: string;

  @IsString()
  @MaxLength(50)
  tipoLocal!: string;

  @IsInt()
  qtdPessoas!: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  ocasiao?: string;

  @IsOptional()
  @IsString()
  viabilidadeEstrutura?: string;

  @IsOptional()
  @IsString()
  restricoesAlimentares?: string;

  @IsNumber()
  valorEstimadoTotal!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  status!: string;
}
