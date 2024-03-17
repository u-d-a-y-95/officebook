import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createDesignationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;
}

export class updateDesignationDto extends createDesignationDto {}
