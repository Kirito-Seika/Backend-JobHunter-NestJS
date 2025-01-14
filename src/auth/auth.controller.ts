import {
  Controller,
  Post,
  UseGuards,
  Request, Body,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  //login
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ResponseMessage("User Login")
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('/register')
  @ResponseMessage("Register User")
  handleRegister(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }
}
