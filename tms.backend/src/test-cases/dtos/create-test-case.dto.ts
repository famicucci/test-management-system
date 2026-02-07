import { IsString, IsArray, ValidateNested } from 'class-validator';

export class CreateTestCasesDto {
  @IsString()
  question: string;

  @IsArray()
  @ValidateNested({ each: true })

  @IsString()
  explanation: string;

  @IsString()
  topic: string;
}
