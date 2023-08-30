import { PartialType } from '@nestjs/mapped-types';
import { CreateDevlogDto } from './create-devlog.dto';

export class UpdateDevlogDto extends PartialType(CreateDevlogDto) {}
