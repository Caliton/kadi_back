import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchController } from './branch.controller';
import { Branch } from './branch.entity';
import { BranchService } from './branch.service';

@Module({
  imports: [TypeOrmModule.forFeature([Branch])],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}
