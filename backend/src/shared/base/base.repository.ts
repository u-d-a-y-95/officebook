import { EntityManager, EntityTarget, Repository } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  constructor(target: EntityTarget<T>, manager: EntityManager) {
    super(target, manager);
  }

  removeWithItem() {
    this.manager.find(this.target);
  }
}
