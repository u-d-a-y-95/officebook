import {
  BeforeInsert,
  CreateDateColumn,
  PrimaryColumn,
  BaseEntity as TypeOrmBaseEntity,
  UpdateDateColumn,
} from 'typeorm';
import { createId } from '@paralleldrive/cuid2';

export class BaseEntity extends TypeOrmBaseEntity {
  @PrimaryColumn({
    nullable: false,
  })
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static async deletedWithItem() {
    const a = await this.find();
    console.log(a);
    // await this.delete({});
    return a;
  }

  @BeforeInsert()
  setHashId() {
    this.id = createId();
  }
}
