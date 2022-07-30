import { ApiProperty } from '@nestjs/swagger';

export class DepartamentResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;
}
