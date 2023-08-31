import { IsArray, IsOptional, IsString } from 'class-validator';
//интерфейс для данных, которые выплевывает EditorJS с фронта
export interface OutputBlockData {
  id?: string;
  type: any;
  data: any;
}

export class CreateDevlogDto {
  @IsString()
  title: string;

  //В случае отстутствия полного описания, будем показывть тоже самое что и в превью
  @IsOptional()
  @IsArray()
  mainContent: OutputBlockData[];

  @IsArray()
  previewContent: OutputBlockData[];
}
