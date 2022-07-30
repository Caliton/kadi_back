import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GlobalSettingsModule } from '../globalSettings/globalsettings.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    GlobalSettingsModule,
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXP,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}
