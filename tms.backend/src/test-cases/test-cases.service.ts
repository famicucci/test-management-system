import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestCases as TestCasesEntity } from './test-cases.entity';
import { Repository } from 'typeorm';
import { CreateTestCasesDto } from './dtos/create-test-case.dto';

@Injectable()
export class TestCasesService {
  constructor(
    @InjectRepository(TestCasesEntity)
    private testCasesRepository: Repository<TestCasesEntity>,
  ) {}

  getTestCases(qty: number): Promise<TestCasesEntity[]> {
    return this.testCasesRepository
      .createQueryBuilder('testCase')
      .leftJoinAndSelect('testCase.options', 'option')
      .orderBy('RAND()')
      .take(qty)
      .getMany();
  }

  createTestCase(testCase: CreateTestCasesDto): Promise<TestCasesEntity> {
    const testCaseEntity = this.testCasesRepository.create({
      ...testCase,
    });

    return this.testCasesRepository.save(testCaseEntity);
  }
}
