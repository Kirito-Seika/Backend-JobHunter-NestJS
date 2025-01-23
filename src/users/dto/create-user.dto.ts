import {
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  Validate,
  ValidateNested,
} from 'class-validator';
import {
  IsAddressValidConstraint,
  IsAgeValidConstraint,
  IsEmailValidConstraint,
  IsGenderValidConstraint,
  IsNameValidConstraint,
  IsPasswordValidConstraint,
  IsPhoneValidConstraint,
} from 'src/users/validator/validate.user';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';

class Company {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  name: string;
}

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

  @Validate(IsGenderValidConstraint)
  gender: string;

  @Validate(IsAddressValidConstraint)
  address: string;

  @IsNotEmpty({ message: 'Role không được để trống', })
  @IsMongoId({ message: 'Role có định dạng là mongo id', })
  role: mongoose.Schema.Types.ObjectId;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}
