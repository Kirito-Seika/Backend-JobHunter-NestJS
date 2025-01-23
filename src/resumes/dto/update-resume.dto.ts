import { PartialType } from '@nestjs/mapped-types';
import { CreateResumeDto } from 'src/resumes/dto/create-resume.dto';

export class UpdateResumeDto extends PartialType(CreateResumeDto) {}
