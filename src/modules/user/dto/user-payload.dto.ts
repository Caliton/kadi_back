import { Collaborator } from 'src/modules/collaborator/collaborator.entity';
import { UserRole } from '../user-role.enum';

export class UserPayloadDto {
  readonly id: string;
  readonly login: string;
  readonly role: UserRole;
  readonly collaborator: Collaborator;
}
