import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Trim } from 'src/utils/transform';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @IsString()
  @Trim()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  password: string;
}
export class SignInDto {
  @IsString()
  @Trim()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  password: string;
}
