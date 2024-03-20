import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import {
  createDesignationDto,
  updateDesignationDto,
} from './dtos/employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  createDesignation(@Body() body: any) {
    return this.employeeService.create(body);
  }

  @Get()
  getAllDesignations() {
    return this.employeeService.find();
  }

  // @Get(':id')
  // getDesignationById(@Param('id') id: string) {
  //   return this.designationService.findById(id);
  // }

  // @Put(':id')
  // updateDesignationById(
  //   @Param('id') id: string,
  //   @Body() body: updateDesignationDto,
  // ) {
  //   return this.designationService.updateById(id, body);
  // }

  // @Delete(':id')
  // deleteDesignationById(@Param('id') id: string) {
  //   return this.designationService.deleteById(id);
  // }
}
