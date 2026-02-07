import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestCases {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  steps: string;

  @Column()
  testData: string;

  @Column()
  expectedResult: string;

  @Column()
  platform: string;

  @Column()
  priority: string;
}
