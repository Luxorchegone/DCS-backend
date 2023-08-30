import { PartialType } from '@nestjs/mapped-types';
import { CreateMainsectionDto } from './create-mainsection.dto';

export class UpdateMainsectionDto extends PartialType(CreateMainsectionDto) {}
