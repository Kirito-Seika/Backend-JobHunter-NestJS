import { IsNotEmpty, Validate } from 'class-validator';
import { IsNameValidConstraint } from 'src/companies/validator/validate.company';

export class CreateCompanyDto {
  @Validate(IsNameValidConstraint)
  name: string;

  @IsNotEmpty({ message: 'Address không được để trống' })
  address: string;

  @IsNotEmpty({ message: 'Description không được để trống' })
  description: string;

  @IsNotEmpty({ message: 'Logo không được để trống', })
  logo: string;
}
