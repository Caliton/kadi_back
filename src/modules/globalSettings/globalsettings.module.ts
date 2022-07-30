import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalSettingsController } from './globalsettings.controller';
import { GlobalSettings } from './globalsettings.entity';
import { GlobalSettingsService } from './globalsettings.service';

Global();
@Module({
  imports: [TypeOrmModule.forFeature([GlobalSettings])],
  controllers: [GlobalSettingsController],
  providers: [GlobalSettingsService],
  exports: [GlobalSettingsService],
})
export class GlobalSettingsModule {}
