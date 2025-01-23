import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import mongoose from 'mongoose';

//Validate Email
@ValidatorConstraint({ async: false })
export class IsEmailValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    const atIndex = value.indexOf('@');
    if (atIndex === -1) {
      return false;
    }
    const localPart = value.split('@')[0];
    const domainPart = value.split('@')[1];
    if (/[^a-zA-Z0-9]/.test(localPart)) {
      return false;
    }
    if (!/[a-zA-Z]/.test(localPart)) {
      return false;
    }
    if (domainPart !== 'gmail.com') {
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Email không được để trống.';
    }
    const localPart = value.split('@')[0];
    if (/[^a-zA-Z0-9]/.test(localPart)) {
      return 'Email chỉ được chứa bao gồm chữ cái và số!';
    }
    if (!/[a-zA-Z]/.test(localPart)) {
      return 'Email phải chứa ít nhất một chữ cái';
    }
    if (!value.endsWith('@gmail.com')) {
      return 'Email phải có đuôi @gmail.com';
    }
    return 'Email không hợp lệ';
  }
}

//Validate UserId
@ValidatorConstraint({ async: false })
export class IsUserIdValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (!value) {
      return false;
    }
    if (value instanceof mongoose.Types.ObjectId) {
      return mongoose.Types.ObjectId.isValid(value);
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    if (!args.value) {
      return 'userId không được để trống.';
    }
    return 'userId phải là một ObjectId hợp lệ.';
  }
}

//Validate CompanyId
@ValidatorConstraint({ async: false })
export class IsCompanyIdValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (!value) {
      return false;
    }
    if (value instanceof mongoose.Types.ObjectId) {
      return mongoose.Types.ObjectId.isValid(value);
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    if (!args.value) {
      return 'companyId không được để trống.';
    }
    return 'companyId phải là một ObjectId hợp lệ.';
  }
}

//Validate JobId
@ValidatorConstraint({ async: false })
export class IsJobIdValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (!value) {
      return false;
    }
    if (value instanceof mongoose.Types.ObjectId) {
      return mongoose.Types.ObjectId.isValid(value);
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    if (!args.value) {
      return 'jobId không được để trống.';
    }
    return 'jobId phải là một ObjectId hợp lệ.';
  }
}