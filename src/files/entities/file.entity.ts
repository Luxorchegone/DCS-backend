import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
