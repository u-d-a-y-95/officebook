import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Department extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string;
}
