import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ResponseMessage } from 'src/decorator/customize';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //create user
  @Post()
  @ResponseMessage('Create User')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ResponseMessage('Fetch All User')
  findAll() {
    return this.usersService.findAll();
  }

  //get user by id
  @Get(':id')
  @ResponseMessage('Fetch User By Id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  //update user
  @Patch()
  @ResponseMessage('Update User')
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id')
  @ResponseMessage('Delete User')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
