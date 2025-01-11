import { IsNotEmpty, Validate } from 'class-validator';
import { IsNameValidConstraint } from 'src/companies/validator/validate.company';

export class CreateCompanyDto {
  @Validate(IsNameValidConstraint)
  name: string;

  @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
  address: string;

  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  description: string;
}
