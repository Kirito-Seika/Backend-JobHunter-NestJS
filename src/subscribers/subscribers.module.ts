import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribersService } from 'src/subscribers/subscribers.service';
import { SubscribersController } from 'src/subscribers/subscribers.controller';
import { Subscriber, SubscriberSchema } from 'src/subscribers/schemas/subscriber.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Subscriber.name, schema: SubscriberSchema },
  ])],
  controllers: [SubscribersController],
  providers: [SubscribersService],
})
export class SubscribersModule {}
