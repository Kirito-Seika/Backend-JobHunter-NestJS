import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
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
      return 'Tên không được để trống.';
    }
    if (value.length < 6) {
      return 'Tên phải có ít nhất 6 ký tự.';
    }
    if (!/^[a-zA-Z]/.test(value)) {
      return 'Tên phải bắt đầu bằng chữ cái.';
    }
    return 'Tên không hợp lệ';
  }
}

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

//Validate Password
@ValidatorConstraint({ async: false })
export class IsPasswordValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    if (value.length < 6) {
      return false;
    }
    const hasDiacritics =
      /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/i.test(
        value,
      );
    if (/\s/.test(value)) {
      return false;
    }
    return !hasDiacritics;
  }

  defaultMessage(args: ValidationArguments) {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Mật khẩu không được để trống.';
    }
    if (value.length < 6) {
      return 'Mật khẩu phải có ít nhất 6 ký tự.';
    }
    const hasDiacritics =
      /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/i.test(
        value,
      );
    if (hasDiacritics) {
      return 'Mật khẩu không được chứa chữ cái có dấu.';
    }
    if (/\s/.test(value)) {
      return 'Mật khẩu không được chứa ký tự khoảng cách.';
    }
    return 'Mật khẩu không hợp lệ';
  }
}

// Validate Phone
@ValidatorConstraint({ async: false })
export class IsPhoneValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    if (!/^\d+$/.test(value)) {
      return false;
    }
    return value.length >= 10;
  }

  defaultMessage(args: ValidationArguments) {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Số điện thoại không được để trống.';
    }
    if (!/^\d+$/.test(value)) {
      return 'Số điện thoại chỉ được chứa các ký tự số.';
    } else if (value.length < 10) {
      return 'Số điện thoại phải có ít nhất 10 ký tự.';
    }
    return '';
  }
}

//Validate Age
@ValidatorConstraint({ async: false })
export class IsAgeValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (value === '') {
      return false; // Trả về false nếu giá trị trống
    }
    if (!Number(value)) {
      return false;
    }
    if (value < 0) {
      return false;
    }
    return value <= 200;
  }

  defaultMessage(args: ValidationArguments) {
    const value = args.value;
    if (value === '') {
      return 'Tuổi không được để trống.'; // Trường hợp trống
    }
    if (!Number(value)) {
      return 'Tuổi phải là một số nguyên.';
    } else {
      if (value < 0) {
        return 'Tuổi phải lớn hơn 0.';
      }
      if (value > 200) {
        return 'Tuổi phải nhỏ hơn 200.';
      }
    }
    return '';
  }
}

//Validate Gender
@ValidatorConstraint({ async: false })
export class IsGenderValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const validGenders = ['male', 'female', 'other'];
    if (value === null || value === undefined || value === '') {
      return false;
    }
    return validGenders.includes(value.toLowerCase());
  }

  defaultMessage(args: ValidationArguments) {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Giới tính không được để trống.';
    }
    return 'Giới tính không hợp lệ. Hãy chọn giữa "male", "female" hoặc "other".';
  }
}

@ValidatorConstraint({ async: false })
export class IsAddressValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (value === null || value === undefined || value === '') {
      return false;
    }
    if (value.length < 10 || value.length > 255) {
      return false;
    }
    const addressRegex = /^[a-zA-Z0-9\s,.-]+$/;
    return addressRegex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    const value = args.value;
    if (value === null || value === undefined || value === '') {
      return 'Địa chỉ không được để trống.';
    }
    if (value.length < 10) {
      return 'Địa chỉ phải có ít nhất 10 ký tự.';
    }
    if (value.length > 255) {
      return 'Địa chỉ không được dài quá 255 ký tự.';
    }
    return 'Địa chỉ chỉ có thể chứa chữ cái, số và các ký tự đặc biệt như dấu phẩy, gạch nối, dấu chấm.';
  }
}
