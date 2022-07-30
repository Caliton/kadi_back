import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRole } from 'src/modules/user/user-role.enum';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role.guard';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dtos/credentials.dto';
import { ReturnSigninDto } from './dtos/return-signin.dto';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiTags('authentication')
  @Post('login')
  async login(
    @Body(ValidationPipe) credentiaslsDto: CredentialsDto,
  ): Promise<ReturnSigninDto> {
    return await this.authService.login(credentiaslsDto);
  }

  @ApiTags('authentication')
  @Role(UserRole.ADMIN, UserRole.COLLABORATOR)
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Luiz Carlos',
    };
  }
}
