import { IsNotEmpty, Validate } from 'class-validator';
import mongoose from 'mongoose';
import {
  IsCompanyIdValidConstraint,
  IsEmailValidConstraint, IsJobIdValidConstraint,
  IsUserIdValidConstraint,
} from 'src/resumes/validator/validate.resume';

export class CreateResumeDto {
  @Validate(IsEmailValidConstraint)
  email: string;

  @Validate(IsUserIdValidConstraint)
  userId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({ message: 'url không được để trống' })
  url: string;

  @IsNotEmpty({ message: 'status không được để trống' })
  status: string;

  @Validate(IsCompanyIdValidConstraint)
  companyId: mongoose.Schema.Types.ObjectId;

  @Validate(IsJobIdValidConstraint)
  jobId: mongoose.Schema.Types.ObjectId;
}
