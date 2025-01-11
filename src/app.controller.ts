import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ConfigService } from '@nestjs/config';
import { Public } from 'src/decorator/customize';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Public()
  @Get()
  @Render('home.ejs')
  getHello() {
    return this.appService.getHello();
  }
}
