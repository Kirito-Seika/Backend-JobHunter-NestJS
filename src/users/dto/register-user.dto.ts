import { Validate } from 'class-validator';
import {
  IsAddressValidConstraint,
  IsAgeValidConstraint,
  IsEmailValidConstraint, IsGenderValidConstraint,
  IsNameValidConstraint,
  IsPasswordValidConstraint,
  IsPhoneValidConstraint,
} from 'src/users/validator/validate.user';

export class RegisterUserDto {
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

  @Validate(IsGenderValidConstraint)
  gender: string;

  @Validate(IsAddressValidConstraint)
  address: string;
}
