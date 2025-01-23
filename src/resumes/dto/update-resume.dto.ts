import { IsArray, IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateResumeDto } from 'src/resumes/dto/create-resume.dto';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

class UpdatedBy {
  @IsNotEmpty()
  _id: Types.ObjectId;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

class History {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  updatedAt: Date;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => UpdatedBy)
  updatedBy: UpdatedBy;
}

export class UpdateResumeDto extends PartialType(CreateResumeDto) {
  @IsNotEmpty({ message: 'History không được để trống' })
  @IsArray({ message: 'History có định dạng là array' })
  @ValidateNested()
  @Type(() => History)
  history: History[];
}
