import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Collaborator } from '../collaborator/collaborator.entity';
import { UserRole } from './user-role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Collaborator)
  @JoinColumn()
  collaborator: Collaborator;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.COLLABORATOR,
  })
  role: UserRole;

  @Column()
  login: string;

  @Column()
  password: string;
}
