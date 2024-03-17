import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [AuthModule, UserModule, DepartmentModule],
  exports: [],
})
export class CoreModule {}
