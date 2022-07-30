import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GlobalSettings } from './globalsettings.entity';
import { GlobalSettingsService } from './globalsettings.service';

@Controller('globalsettings')
export class GlobalSettingsController {
  constructor(private readonly globalSettingsService: GlobalSettingsService) {}

  @Get()
  @ApiTags('globalSettings')
  async index(): Promise<GlobalSettings[]> {
    return this.globalSettingsService.findAll();
  }

  @Put(':id')
  @ApiTags('globalSettings')
  async update(@Param('id') id: string, @Body() body: GlobalSettings) {
    return await this.globalSettingsService.update(id, body);
  }
}
