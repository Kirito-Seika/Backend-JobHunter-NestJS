import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

//Validate name company
@ValidatorConstraint({ async: false })
export class IsNameValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    if (value.length < 6) {
      return false;
    }
    return /^[a-zA-Z]/.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Tên công ty không được để trống.';
    }
    if (value.length < 6) {
      return 'Tên công ty phải có ít nhất 6 ký tự.';
    }
    if (!/^[a-zA-Z]/.test(value)) {
      return 'Tên phải bắt đầu bằng chữ cái.';
    }
    return 'Tên không hợp lệ';
  }
}