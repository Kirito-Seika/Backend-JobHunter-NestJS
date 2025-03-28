import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User as userModal, UserDocument } from 'src/users/schemas/user.schema';
import { User } from 'src/decorator/customize';
import { IUser } from 'src//users/types/user.interface';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { USER_ROLE } from 'src/databases/sample';
import { Role, RoleDocument } from 'src/roles/schemas/role.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import mongoose from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(userModal.name)
    private userModel: SoftDeleteModel<UserDocument>,
    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RoleDocument>,
  ) {}

  hashPassword = (password: string) => {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  };

  async create(createUserDto: CreateUserDto, @User() user: IUser) {
    const {
      name,
      email,
      password,
      phone,
      age,
      gender,
      address,
      role,
      company,
    } = createUserDto;

    //add logic check email
    const isExist = await this.userModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(
        `Email: ${email} đã tồn tại trên hệ thống. Vui lòng sử dụng email khác.`,
      );
    }
    const hashPassword = this.hashPassword(password);
    return await this.userModel.create({
      name,
      email,
      password: hashPassword,
      phone,
      age,
      gender,
      address,
      role,
      company,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
  }

  async register(user: RegisterUserDto) {
    const { name, email, password, phone, age, gender, address } = user;
    //add logic check email
    const isExist = await this.userModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(
        `Email: ${email} đã tồn tại trên hệ thống. Vui lòng sử dụng email khác.`,
      );
    }
    const userRole = await this.roleModel.findOne({ name: USER_ROLE });
    const hashPassword = this.hashPassword(password);
    return await this.userModel.create({
      name,
      email,
      password: hashPassword,
      phone,
      age,
      gender,
      address,
      role: userRole?._id,
    });
  }

  async findAll(currentPage: number, limit: number, reqString: string) {
    const { filter, sort, population } = aqp(reqString);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .select('-password')
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems, // tổng số phần tử (số bản ghi)
      },
      result, //kết quả query
    };
  }

  findOne = (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not Found User';
    }
    return this.userModel
      .findOne({ _id: id })
      .select('-password')
      .populate({
        path: 'role',
        select: { name: 1, _id: 1 },
      });
  };

  findOneByUsername = (username: string) => {
    return this.userModel.findOne({ email: username }).populate({
      path: 'role',
      select: { name: 1 },
    });
  };

  isValidPassword = (password: string, hash: string) => {
    return compareSync(password, hash);
  };

  update = (updateUserDto: UpdateUserDto, user: IUser, _id: string) => {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new BadRequestException(`Not Found User with id = ${_id}`);
    }
    return this.userModel.updateOne(
      { _id: _id },
      {
        ...updateUserDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  };

  remove = async (id: string, user: IUser) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not Found User';
    }
    const foundUser = await this.userModel.findById(id);
    if (foundUser && foundUser.email === 'admin@gmail.com') {
      throw new BadRequestException('Không thể xóa tài khoản admin@gmail.com');
    }
    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.userModel.softDelete({ _id: id });
  };

  updateUserToken = (refreshToken: string, _id: string) => {
    return this.userModel.updateOne({ _id }, { refreshToken });
  };

  findUserByToken = (refreshToken: string) => {
    return this.userModel.findOne({ refreshToken }).populate({
      path: 'role',
      select: { name: 1 },
    });
  };
}
