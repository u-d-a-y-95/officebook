import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/base/base.service';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService extends BaseService<Department> {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {
    super(departmentRepository);
    // this.departmentRepository.findOne({ id: '123' });
  }
}
