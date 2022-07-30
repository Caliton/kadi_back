import { UserPayloadDto } from 'src/modules/user/dto/user-payload.dto';

export class ReturnSigninDto {
  token: string;
  user: UserPayloadDto;
}
