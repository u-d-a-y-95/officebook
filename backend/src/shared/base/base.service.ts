import { NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository, FindOptionsWhere } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<T> {
  constructor(protected readonly repository: Repository<T>) {}

  create(dto: DeepPartial<T>) {
    const newRecord = this.repository.create(dto);
    console.log(newRecord);
    return this.repository.save(newRecord);
  }

  findAll() {
    return this.repository.find();
  }

  async deleteOne(option: FindOptionsWhere<T>) {
    console.log(option);
    const res = await this.repository.findOneBy(option);
    if (!res) return new NotFoundException();
    await this.repository.delete(option);
    return res;
  }

  async updateOne(
    option: FindOptionsWhere<T>,
    values: QueryDeepPartialEntity<T>,
  ) {
    await this.repository.update(option, values);
    return this.repository.find(option);
  }
}
