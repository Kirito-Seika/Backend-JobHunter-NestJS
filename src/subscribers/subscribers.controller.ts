import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SubscribersService } from 'src/subscribers/subscribers.service';
import { CreateSubscriberDto } from 'src/subscribers/dto/create-subscriber.dto';
import { UpdateSubscriberDto } from 'src/subscribers/dto/update-subscriber.dto';
import { ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/types/user.interface';

@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Post()
  @ResponseMessage("Create a subscriber")
  create(@Body() createSubscriberDto: CreateSubscriberDto, @User() user: IUser) {
    return this.subscribersService.create(createSubscriberDto, user);
  }

  @Get()
  @ResponseMessage("Fetch subscribers with paginate")
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() reqString: string,
  ) {
    return this.subscribersService.findAll(+currentPage, +limit, reqString);
  }

  @Get(':id')
  @ResponseMessage("Fetch subscriber by id")
  findOne(@Param('id') id: string) {
    return this.subscribersService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage("Update a subscriber")
  update(
    @Param('id') id: string,
    @Body() updateSubscriberDto: UpdateSubscriberDto,
    @User() user: IUser
  ) {
    return this.subscribersService.update(id, updateSubscriberDto, user);
  }

  @Delete(':id')
  @ResponseMessage("Delete a subscriber")
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.subscribersService.remove(id, user);
  }
}
