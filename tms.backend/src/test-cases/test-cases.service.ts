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

  getTestCases(): Promise<TestCasesEntity[]> {
    return this.testCasesRepository.find();
  }

  createTestCase(testCase: CreateTestCasesDto): Promise<TestCasesEntity> {
    const testCaseEntity = this.testCasesRepository.create({
      ...testCase,
    });

    return this.testCasesRepository.save(testCaseEntity);
  }
}
