import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ResumesService } from 'src/resumes/resumes.service';
import { CreateResumeDto } from 'src/resumes/dto/create-resume.dto';
import { UpdateResumeDto } from 'src/resumes/dto/update-resume.dto';
import { ResponseMessage, User } from 'src/decorator/customize';
import { CreateUserCvDto } from 'src/resumes/dto/create-user-cv.dto';
import { IUser } from 'src/users/types/user.interface';

@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Post()
  @ResponseMessage("Create Resume")
  create(@Body() createUserCvDto: CreateUserCvDto, @User() user: IUser) {
    return this.resumesService.create(createUserCvDto, user);
  }

  @Post('by-user')
  @ResponseMessage("Get Resumes By User")
  getResumesByUser(@User() user: IUser) {
    return this.resumesService.findByUsers(user);
  }

  @Get()
  @ResponseMessage("Fetch All Resumes")
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() reqString: string,
  ) {
    return this.resumesService.findAll(+currentPage, +limit, reqString);
  }

  @Get(':id')
  @ResponseMessage("Fetch Resume By Id")
  findOne(@Param('id') id: string) {
    return this.resumesService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage("Update Status Resume")
  updateStatus(@Param('id') id: string, @Body("status") status: string, @User() user: IUser) {
    return this.resumesService.update(id, status, user);
  }

  @Delete(':id')
  @ResponseMessage("Delete Resume By Id")
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.resumesService.remove(id, user);
  }
}
