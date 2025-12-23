import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { OptionDto } from './create-option.dto';
import { Type } from 'class-transformer';

export class CreateQuestionDto {
  @IsString()
  question: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  options: OptionDto[];

  @IsNumber()
  correctAnswer: number;

  @IsString()
  explanation: string;
}
