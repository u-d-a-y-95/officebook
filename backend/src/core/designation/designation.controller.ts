import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DesignationService } from './designation.service';
import {
  createDesignationDto,
  updateDesignationDto,
} from './dtos/designation.dto';

@Controller('designations')
export class DesignationController {
  constructor(private designationService: DesignationService) {}

  @Post()
  createDesignation(@Body() body: createDesignationDto) {
    return this.designationService.create(body);
  }

  @Get()
  getAllDesignations() {
    return this.designationService.find();
  }

  @Get(':id')
  getDesignationById(@Param('id') id: string) {
    return this.designationService.findById(id);
  }

  @Put(':id')
  updateDesignationById(
    @Param('id') id: string,
    @Body() body: updateDesignationDto,
  ) {
    return this.designationService.updateById(id, body);
  }

  @Delete(':id')
  deleteDesignationById(@Param('id') id: string) {
    return this.designationService.deleteById(id);
  }
}
