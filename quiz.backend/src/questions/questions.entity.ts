import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Option } from './options.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  question: string;
  @OneToMany(() => Option, (option) => option.question, { cascade: true })
  options: Option[];
  @Column()
  explanation: string;
}
