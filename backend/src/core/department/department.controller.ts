import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import {
  createDepartmentDto,
  updateDepartmentDto,
} from './dtos/department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Post()
  createDepartment(@Body() body: createDepartmentDto) {
    return this.departmentService.create(body);
  }

  @Get()
  getAllDepartments() {
    return this.departmentService.find();
  }

  @Get(':id')
  getDepartmentById(@Param('id') id: string) {
    return this.departmentService.findById(id);
  }

  @Put(':id')
  updateDepartmentById(
    @Param('id') id: string,
    @Body() body: updateDepartmentDto,
  ) {
    return this.departmentService.updateById(id, body);
  }

  @Delete(':id')
  deleteDepartmentById(@Param('id') id: string) {
    return this.departmentService.deleteById(id);
  }
}
