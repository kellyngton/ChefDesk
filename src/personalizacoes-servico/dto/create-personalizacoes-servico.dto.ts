import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePersonalizacoesServicoDto {
  @IsInt()
  idEvento!: number;

  @IsOptional()
  @IsBoolean()
  temDecoracao?: boolean;

  @IsOptional()
  @IsInt()
  qtdGarcons?: number;

  @IsOptional()
  @IsBoolean()
  mudouProteina?: boolean;

  @IsOptional()
  @IsString()
  detalhesProteina?: string;
}
