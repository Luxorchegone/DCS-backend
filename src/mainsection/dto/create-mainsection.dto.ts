import { IsArray, IsString } from 'class-validator';
export interface OutputBlockData {
  id?: string;
  type: any;
  data: any;
}
export class CreateMainsectionDto {
  @IsString()
  title: string;

  @IsArray()
  body: OutputBlockData[];
}

