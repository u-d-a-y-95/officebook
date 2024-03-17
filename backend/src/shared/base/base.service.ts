import { NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository, FindOptionsWhere } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class BaseService<T extends BaseEntity> {
  constructor(protected readonly repository: Repository<T>) {}

  private createInstance(values: DeepPartial<T>) {
    return this.repository.create(values);
  }

  create(values: DeepPartial<T>) {
    const instance = this.createInstance(values);
    return this.repository.save(instance);
  }

  find() {
    return this.repository.find();
  }

  async findById(id: string) {
    const record = await this.repository.findOneBy({
      id,
    } as FindOptionsWhere<T>);
    if (!record) throw new NotFoundException();
    return record;
  }

  async deleteById(id: string) {
    const record = await this.findById(id);
    await this.repository.delete({ id } as FindOptionsWhere<T>);
    return record;
  }

  async updateById(id: string, values: DeepPartial<T>) {
    await this.findById(id);
    const instance = this.createInstance({
      id,
      ...values,
    });
    await this.repository.save(instance);
    return this.findById(id);
  }
}
