import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto, SignupDto } from './dtos/signup.dto';
import { UserService } from '../user/user.service';
import { BcryptService } from 'src/common/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private bcryptService: BcryptService,
    private jwtService: JwtService,
  ) {}

  async signup(body: SignupDto) {
    const alreadyExistUser = await this.userService.findByEmail(body.email);
    if (alreadyExistUser)
      return new ConflictException('User is already exists');

    const hashedPassword = await this.bcryptService.getHashed(body.password);
    body.password = hashedPassword;
    const user = await this.userService.createUser(body);
    return user;
  }

  async signin(body: SignInDto) {
    const user = await this.userService.findByEmail(body.email);
    if (!user) throw new UnauthorizedException();

    const isValid = await this.bcryptService.compareHash(
      body.password,
      user.password,
    );
    if (!isValid) throw new UnauthorizedException();

    const { password: _password, ...payload } = user;
    const token = await this.jwtService.signAsync(payload);
    return {
      user,
      token,
    };
  }
}
