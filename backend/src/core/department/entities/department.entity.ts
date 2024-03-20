import { Employee } from 'src/core/employee/entities/employee.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Department extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  description: string;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee;
}
