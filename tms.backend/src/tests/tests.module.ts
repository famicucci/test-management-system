import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tests } from './tests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tests])],
})
export class TestsModule {}
