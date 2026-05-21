import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateEscolhasMenuDto {
  @IsInt()
  idEvento!: number;

  @IsInt()
  idPrato!: number;

  @IsString()
  @MaxLength(50)
  tipoEscolha!: string;
}
