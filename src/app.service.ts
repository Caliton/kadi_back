import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Backend Kadi de Pé!!! \u{1F601}';
  }
}
