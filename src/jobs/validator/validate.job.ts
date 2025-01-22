import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

//Validate name
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
      return 'Tên job không được để trống.';
    }
    if (value.length < 6) {
      return 'Tên job phải có ít nhất 6 ký tự.';
    }
    if (!/^[a-zA-Z]/.test(value)) {
      return 'Tên job phải bắt đầu bằng chữ cái.';
    }
    return 'Tên job không hợp lệ';
  }
}

//Validate Skills
@ValidatorConstraint({ async: false })
export class IsSkillValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (!Array.isArray(value)) {
      return false;
    }
    if (value.length === 0) {
      return false;
    }
    return value.every(
      (item) => typeof item === 'string' && /^[a-zA-Z]/.test(item),
    );
  }

  defaultMessage(args: ValidationArguments): string {
    const value = args.value;
    if (!Array.isArray(value)) {
      return 'Skill phải là một mảng.';
    }
    if (value.length === 0) {
      return 'Skill không được để trống.';
    }
    if (!value.every((item) => typeof item === 'string')) {
      return 'Skill chỉ được chứa các chuỗi string.';
    }
    if (!value.every((item) => /^[a-zA-Z]/.test(item))) {
      return 'Mỗi skill trong mảng phải bắt đầu bằng chữ cái.';
    }
    return 'Skill không hợp lệ.';
  }
}

//Validate Salary
@ValidatorConstraint({ async: false })
export class IsSalaryValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    return /^[0-9]+$/.test(value.toString());
  }

  defaultMessage(args: ValidationArguments): string {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Salary không được để trống.';
    }
    if (!/^[0-9]+$/.test(value.toString())) {
      return 'Salary chỉ được chứa các chữ số.';
    }
    return 'Salary không hợp lệ.';
  }
}

//Validate Quantity
@ValidatorConstraint({ async: false })
export class IsQuantityValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    return /^[0-9]+$/.test(value.toString());
  }

  defaultMessage(args: ValidationArguments): string {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Số lượng không được để trống.';
    }
    if (!/^[0-9]+$/.test(value.toString())) {
      return 'Số lượng chỉ được chứa các chữ số.';
    }
    return 'Số lượng không hợp lệ.';
  }
}

//Validate StartDate
@ValidatorConstraint({ async: false })
export class IsStartDateValidConstraint
  implements ValidatorConstraintInterface
{
  validate(value: any, args: ValidationArguments): boolean {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    return !isNaN(Date.parse(value));
  }

  defaultMessage(args: ValidationArguments): string {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Start date không được để trống.';
    }
    if (isNaN(Date.parse(value))) {
      return 'Start date phải có dạng ngày hợp lệ.';
    }
    return 'Start date không hợp lệ.';
  }
}

//Validate StartDate
@ValidatorConstraint({ async: false })
export class IsEndDateValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    return !isNaN(Date.parse(value));
  }

  defaultMessage(args: ValidationArguments): string {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'End date không được để trống.';
    }
    if (isNaN(Date.parse(value))) {
      return 'End date phải có dạng ngày hợp lệ.';
    }
    return 'End date không hợp lệ.';
  }
}

//Validate IsActive
@ValidatorConstraint({ async: false })
export class IsActiveValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    return typeof value === 'boolean';
  }

  defaultMessage(args: ValidationArguments): string {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'isActive không được để trống.';
    }
    if (typeof value !== 'boolean') {
      return 'isActive phải có định dạng boolean.';
    }
    return 'isActive không hợp lệ.';
  }
}
