import { IsOptional, IsString, MaxLength } from 'class-validator';

export class FilterPratosCardapioDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  categoria?: string;
}
