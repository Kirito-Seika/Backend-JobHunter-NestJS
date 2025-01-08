import { IsNotEmpty, Validate } from 'class-validator';
import {
  IsAgeValidConstraint,
  IsEmailValidConstraint,
  IsNameValidConstraint,
  IsPasswordValidConstraint,
  IsPhoneValidConstraint,
} from 'src/users/validator/validate.custom';

export class CreateUserDto {
  @Validate(IsNameValidConstraint)
  name: string;

  @Validate(IsEmailValidConstraint)
  email: string;

  @Validate(IsPasswordValidConstraint)
  password: string;

  @Validate(IsPhoneValidConstraint)
  phone: number;

  @Validate(IsAgeValidConstraint)
  age: number;

  @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
  address: string;
}
