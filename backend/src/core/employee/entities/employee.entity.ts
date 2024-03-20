import { Department } from 'src/core/department/entities/department.entity';
import { Designation } from 'src/core/designation/entities/designation.entity';
import { User } from 'src/core/user/entities/user.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

enum GENDER {
  MALE,
  FEMALE,
}

@Entity()
export class Employee extends BaseEntity {
  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    nullable: true,
    name: 'last_name',
  })
  lastName: string;

  @Column()
  gender: GENDER;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  dob: Date;

  @Column({ nullable: true })
  address: string;

  @Column({ name: 'blood_group', nullable: true })
  bloodGroup: string;

  @OneToOne(() => User, (user) => user.employee, {
    nullable: false,
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Department, (department) => department.employees, {
    nullable: false,
  })
  department: Department;

  @ManyToOne(() => Designation, (designation) => designation.employees, {
    nullable: false,
  })
  designation: Designation;
}
