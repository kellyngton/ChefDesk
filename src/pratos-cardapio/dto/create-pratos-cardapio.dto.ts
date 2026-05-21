import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePratosCardapioDto {
  @IsString()
  @MaxLength(100)
  nome!: string;

  @IsString()
  @MaxLength(50)
  categoria!: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
