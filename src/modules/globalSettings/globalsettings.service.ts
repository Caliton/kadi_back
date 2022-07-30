import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlobalSettings } from './globalsettings.entity';

@Injectable()
export class GlobalSettingsService {
  constructor(
    @InjectRepository(GlobalSettings)
    private readonly globalSettingsRepo: Repository<GlobalSettings>,
  ) {}

  public async findAll() {
    return await this.globalSettingsRepo.find();
  }

  public async findOneOrFail(id: string) {
    try {
      return await this.globalSettingsRepo.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async update(id: string, data: GlobalSettings) {
    const globalSettings = await this.findOneOrFail(id);

    this.globalSettingsRepo.merge(globalSettings, data);
    return await this.globalSettingsRepo.save(globalSettings);
  }

  public async getVersion() {
    const globalSettings = await this.globalSettingsRepo.findOne({
      key: 'VERSION_SYSTEM',
    });

    return globalSettings;
  }

  public async getSettings(setting: string) {
    const globalSettings = await this.globalSettingsRepo.findOne({
      key: setting.toUpperCase(),
    });

    return globalSettings.value;
  }
}
