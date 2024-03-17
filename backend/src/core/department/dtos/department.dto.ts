import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createDepartmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;
}

export class updateDepartmentDto extends createDepartmentDto {}
