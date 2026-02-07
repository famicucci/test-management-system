import { IsString, IsArray, ValidateNested } from 'class-validator';

export class CreateTestCasesDto {
  @IsString()
  category: string;

  @IsString()
  title: string;

  @IsString()
  steps: string;

  @IsString()
  testData: string;

  @IsString()
  expectedResult: string;

  @IsString()
  platform: string;

  @IsString()
  priority: string;
}
