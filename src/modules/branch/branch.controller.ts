import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Branch } from './branch.entity';
import { BranchService } from './branch.service';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @ApiTags('branch')
  @Get()
  async index(): Promise<Branch[]> {
    return this.branchService.findAll();
  }

  @ApiTags('branch')
  @Post()
  async create(@Body() body: Branch) {
    return await this.branchService.create(body);
  }

  @ApiTags('branch')
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Branch) {
    return await this.branchService.update(id, body);
  }

  @ApiTags('branch')
  @Delete(':id')
  async destroy(@Param('id') id: string) {
    await this.branchService.deleteById(id);
  }
}
