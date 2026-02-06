import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  question: string;
  @Column({ type: 'text' })
  explanation: string;
  @Column()
  topic: string;
}
