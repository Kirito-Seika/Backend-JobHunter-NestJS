import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/types/user.interface';
import { RegisterUserDto } from '../users/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //username/pass là 2 tham số thư viện passport trả về
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        return user;
      }
    }
    return null;
  }

  async login(user: IUser) {
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      age: user.age,
      gender:user.gender,
      address: user.address,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      age: user.age,
      gender:user.gender,
      address: user.address,
      role: user.role,
    };
  }

  async register(user: RegisterUserDto) {
    let newUser = await this.usersService.register(user);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt
    };
  }
}
