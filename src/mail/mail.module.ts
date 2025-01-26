import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from 'src/mail/mail.service';
import { MailController } from 'src/mail/mail.controller';
import { Job, JobSchema } from 'src/jobs/schemas/job.schema';
import { Subscriber, SubscriberSchema } from 'src/subscribers/schemas/subscriber.schema';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('EMAIL_HOST'),
          secure: false,
          auth: {
            user: configService.get<string>('EMAIL_AUTH_USER'),
            pass: configService.get<string>('EMAIL_AUTH_PASS'),
          },
        },
        preview: true,
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: Subscriber.name, schema: SubscriberSchema },
      { name: Job.name, schema: JobSchema }
    ])
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
