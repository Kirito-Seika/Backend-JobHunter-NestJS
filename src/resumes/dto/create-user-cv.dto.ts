import { IsMongoId, IsNotEmpty, Validate } from 'class-validator';
import mongoose from 'mongoose';
import {
  IsCompanyIdValidConstraint,
  IsJobIdValidConstraint,
} from 'src/resumes/validator/validate.resume';

export class CreateUserCvDto {
  @IsNotEmpty({ message: 'url không được để trống' })
  url: string;

  @Validate(IsCompanyIdValidConstraint)
  companyId: mongoose.Schema.Types.ObjectId;

  @Validate(IsJobIdValidConstraint)
  jobId: mongoose.Schema.Types.ObjectId;
}
