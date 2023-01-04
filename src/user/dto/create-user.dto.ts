import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsMobilePhone()
  @IsOptional()
  phone: number;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsOptional()
  @IsString()
  role: string;
}
