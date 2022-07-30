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
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiTags('user')
  async index(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiTags('user')
  @Get(':id')
  async getRequests(@Param('id') id: string) {
    return await this.userService.findOneOrFail(id);
  }

  @Post()
  @ApiTags('user')
  async create(@Body() body: User) {
    return await this.userService.create(body);
  }

  @Put(':id')
  @ApiTags('user')
  async update(@Param('id') id: string, @Body() body: User) {
    return await this.userService.update(id, body);
  }

  @Delete(':id')
  @ApiTags('user')
  async destroy(@Param('id') id: string) {
    await this.userService.deleteById(id);
  }
}
