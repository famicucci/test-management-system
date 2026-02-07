import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestCases {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  question: string;
  @Column({ type: 'text' })
  explanation: string;
  @Column()
  topic: string;
}
