import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/base/base.service';
import { Designation } from './entities/designation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DesignationService extends BaseService<Designation> {
  constructor(
    @InjectRepository(Designation)
    private designationRepository: Repository<Designation>,
  ) {
    super(designationRepository);
  }
}
