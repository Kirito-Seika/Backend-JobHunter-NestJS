import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  Validate,
  ValidateNested,
} from 'class-validator';
import {
  IsActiveValidConstraint,
  IsEndDateValidConstraint,
  IsNameValidConstraint,
  IsSalaryValidConstraint,
  IsSkillValidConstraint,
  IsStartDateValidConstraint,
} from 'src/jobs/validator/validate.job';
import { Type } from 'class-transformer';

class Company {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  name: string;
}

export class CreateJobDto {
  @Validate(IsNameValidConstraint)
  name: string;

  @Validate(IsSkillValidConstraint)
  skills: string[];

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;

  @Validate(IsSalaryValidConstraint)
  salary: number;

  @Validate(IsSalaryValidConstraint)
  quantity: number;

  @IsNotEmpty({ message: 'Level không được để trống' })
  level: string;

  @IsNotEmpty({ message: 'Description không được để trống' })
  description: string;

  @Validate(IsStartDateValidConstraint)
  startDate: Date;

  @Validate(IsEndDateValidConstraint)
  endDate: Date;

  @Validate(IsActiveValidConstraint)
  isActive: boolean;
}
