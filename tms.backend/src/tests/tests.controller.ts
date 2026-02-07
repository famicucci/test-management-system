import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Tests } from './tests.entity';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dtos/create-test.dto';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get()
  async getTests(): Promise<Tests[]> {
    return await this.testsService.getTests();
  }

  @Post()
  createTest(@Body() test: CreateTestDto) {
    console.log(test);
    return this.testsService.createTest(test);
  }

  @Delete(':id')
  deleteTest(@Param('id') id: string) {
    return this.testsService.deleteTest(id);
  }
}
