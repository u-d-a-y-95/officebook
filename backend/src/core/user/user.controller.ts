import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    // return this.userService.create(createUserDto);
  }
  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteOne({ id });
  }
}
