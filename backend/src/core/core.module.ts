import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { DesignationModule } from './designation/designation.module';

@Module({
  imports: [AuthModule, UserModule, DepartmentModule, DesignationModule],
  exports: [],
})
export class CoreModule {}
