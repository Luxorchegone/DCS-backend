import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OutputBlockData } from '../dto/create-mainsection.dto';

@Entity('mainsetion')
export class MainSectionEntity {
  @PrimaryGeneratedColumn()
  id: number;
  //название раздела для механизма навигации
  @Column()
  tag: string;
  //название раздела на странице и в меню
  @Column()
  title: string;
  //изображение влевой части контентного блока
  @Column()
  leftImage: string;
  //изображение текст правой части контентного блока
  @Column({ type: 'jsonb', nullable: true })
  mainContent: OutputBlockData[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
