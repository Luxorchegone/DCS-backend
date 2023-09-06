import { IsArray, IsString } from 'class-validator';
export interface OutputBlockData {
  id?: string;
  type: any;
  data: any;
}
export class CreateMainsectionDto {
  @IsString()
  tag: string;

  @IsString()
  title: string;

  @IsString()
  leftImage: string;

  @IsArray()
  mainContent: OutputBlockData[];
}
