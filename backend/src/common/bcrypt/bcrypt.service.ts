import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class BcryptService {
  getHashed(value, saltRounds: number = 5) {
    return hash(value, saltRounds);
  }

  compareHash(value, hashed) {
    return compare(value, hashed);
  }
}
