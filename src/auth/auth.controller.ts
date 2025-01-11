import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  //login
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ResponseMessage("Login User")
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ResponseMessage("Information User Login")
  getProfile(@Request() req) {
    return req.user;
  }
}
