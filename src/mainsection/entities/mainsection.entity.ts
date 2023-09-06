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

  @Column()
  tag: string;

  @Column()
  title: string;

  @Column()
  leftImage: string;

  @Column({ type: 'jsonb', nullable: true })
  mainContent: OutputBlockData[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
