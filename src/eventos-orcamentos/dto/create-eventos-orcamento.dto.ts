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
  @IsMongoId()
  idCliente!: string;

  @IsDateString()
  dataEvento!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  cidade!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  bairro?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipoLocal!: string;

  @IsInt()
  @Min(1)
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
  @Min(0)
  valorEstimadoTotal!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  status!: string;
}
