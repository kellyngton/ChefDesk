import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({ example: 'Maria Silva' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nome!: string;

  @ApiProperty({ example: '+55 85 99999-9999' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  whatsapp!: string;

  @ApiPropertyOptional({ example: 'maria@email.com' })
  @IsEmail()
  @IsOptional()
  @MaxLength(150)
  email?: string;

  @ApiPropertyOptional({ example: '60100-000' })
  @IsString()
  @IsOptional()
  @MaxLength(10)
  cep?: string;

  @ApiPropertyOptional({ example: 'Rua das Flores, 123' })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  endereco?: string;
}
