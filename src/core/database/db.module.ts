import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from 'src/modules/collaborator/collaborator.entity';
import { GlobalSettings } from 'src/modules/globalSettings/globalsettings.entity';
import { User } from 'src/modules/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      entities: [Collaborator, GlobalSettings, User],
      synchronize: process.env.DEPLOY !== 'prod',
      // migrations: ['src/core/database/migrations/*.js'],
    }),
  ],
})
export class DbModule {}
