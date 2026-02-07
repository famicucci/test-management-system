import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TestCases } from './test-cases.entity';
import { TestCasesService } from './test-cases.service';
import { CreateTestCasesDto } from './dtos/create-test-case.dto';

@Controller('questions')
export class TestCasesController {
  constructor(private readonly testCasesService: TestCasesService) {}

  @Get()
  async getTestCases(@Query('qty') qty: number): Promise<TestCases[]> {
    return await this.testCasesService.getTestCases(qty);
  }

  @Post()
  createTestCase(@Body() question: CreateTestCasesDto) {
    return this.testCasesService.createTestCase(question);
  }
}
