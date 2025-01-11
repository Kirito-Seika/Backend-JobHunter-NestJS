import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/types/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //create user
  @Post()
  @ResponseMessage('Create User')
  async create(@Body() createUserDto: CreateUserDto, @User() user: IUser) {
    let newUser = await this.usersService.create(createUserDto, user);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt,
    };
  }

  @Get()
  @ResponseMessage('Fetch All User')
  findAll(
    @Query('page') currentPage: string,
    @Query('limit') limit: string,
    @Query() reqString: string,
  ) {
    return this.usersService.findAll(+currentPage, +limit, reqString);
  }

  //get user by id
  @Public()
  @Get(':id')
  @ResponseMessage('Fetch User By Id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  //update user
  @Patch()
  @ResponseMessage('Update User')
  async update(@Body() updateUserDto: UpdateUserDto, @User() user: IUser) {
    return await this.usersService.update(updateUserDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete User')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.usersService.remove(id, user);
  }
}
