import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BaseRepository } from 'src/shared/base/base.repository';
import { BaseService } from 'src/shared/base/base.service';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User) private userRepository: BaseRepository<User>,
  ) {
    super(userRepository);
  }
  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
}
