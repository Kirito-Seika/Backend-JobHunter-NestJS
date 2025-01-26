import { Controller, Get } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { Public, ResponseMessage } from '../decorator/customize';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private mailerService: MailerService,
  ) {}

  @Get()
  @Public()
  @ResponseMessage('Test email')
  async handleTestEmail() {
    await this.mailerService.sendMail({
      to: 'nekkochan2k@gmail.com',
      from: '"JobHunter" <support@example.com>', // override default from
      subject: 'Welcome to JobHunter! Confirm your Email',
      template: "job"
    });
  }
}
