import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TestCases } from './test-cases.entity';
import { TestCasesService } from './test-cases.service';
import { CreateTestCasesDto } from './dtos/create-test-case.dto';

@Controller('test-cases')
export class TestCasesController {
  constructor(private readonly testCasesService: TestCasesService) {}

  @Get()
  async getTestCases(): Promise<TestCases[]> {
    return await this.testCasesService.getTestCases();
  }

  @Post()
  createTestCase(@Body() testCase: CreateTestCasesDto) {
    return this.testCasesService.createTestCase(testCase);
  }

  @Delete(':id')
  deleteTestCase(@Param('id') id: string) {
    return this.testCasesService.deleteTestCase(id);
  }
}
