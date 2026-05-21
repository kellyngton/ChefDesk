import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateConfiguracoesCockpitDto {
  @IsInt()
  idPersonalizacao!: number;

  @IsString()
  @MaxLength(100)
  chave!: string;

  @IsString()
  @MaxLength(255)
  valor!: string;
}
