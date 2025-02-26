import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/users/types/user.interface';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { Response } from 'express';
import ms from 'ms';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private rolesService: RolesService,
  ) {}

  //username/pass là 2 tham số thư viện passport trả về
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        const userRole = user.role as unknown as { _id: string; name: string };
        const temp = await this.rolesService.findOne(userRole._id);
        return {
          ...user.toObject(),
          permissions: temp?.permissions ?? [],
        };
      }
    }
    return null;
  }

  async login(user: IUser, response: Response) {
    const { _id, name, email, phone, age, gender, address, role, permissions } =
      user;
    const payload = {
      _id,
      name,
      email,
      phone,
      age,
      gender,
      address,
      role,
    };

    const refresh_token = this.refreshToken(payload);

    //Update User Token
    await this.usersService.updateUserToken(refresh_token, _id);

    //Set Cookie
    response.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')),
    });

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        _id,
        name,
        email,
        phone,
        age,
        gender,
        address,
        role,
        permissions,
      },
    };
  }

  async register(user: RegisterUserDto) {
    let newUser = await this.usersService.register(user);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt,
    };
  }

  logout = async (response: Response, user: IUser) => {
    await this.usersService.updateUserToken('', user._id);
    response.clearCookie('refresh_token');
    return 'ok';
  };

  refreshToken = (payload: any) => {
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn:
        ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')) / 1000,
    });
  };

  processNewToken = async (refreshToken: string, response: Response) => {
    try {
      this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });
      let user = await this.usersService.findUserByToken(refreshToken);

      if (user) {
        const { _id, name, email, phone, age, gender, address, role } = user;
        const payload = {
          _id,
          name,
          email,
          phone,
          age,
          gender,
          address,
          role,
        };

        const refresh_token = this.refreshToken(payload);

        //Update User Token
        await this.usersService.updateUserToken(refresh_token, _id.toString());

        const userRole = user.role as unknown as { _id: string; name: string };
        const temp = await this.rolesService.findOne(userRole._id);

        //Set Cookie
        response.clearCookie('refresh_token');
        response.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')),
        });

        return {
          access_token: this.jwtService.sign(payload),
          user: {
            _id,
            name,
            email,
            phone,
            age,
            gender,
            address,
            role,
            permissions: temp?.permissions ?? [],
          },
        };
      } else {
        throw new BadRequestException('Không tìm thấy User');
      }
    } catch (err) {
      throw new BadRequestException(
        'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!',
      );
    }
  };
}
