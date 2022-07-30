import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Departament } from '../departament/departament.entity';
import { Profile } from '../profile/profile.entity';
import { ApprovalVacation } from '../vacationRequest/approval-vacation.entity';
import { VacationRequest } from '../vacationRequest/vacation-request.entity';

export enum CollaboratorType {
  EFFECTIVE = 'effective',
  INTERN = 'intern',
}

@Entity()
export class Collaborator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  register: string;

  @Column({ type: 'date' })
  birthday: string;

  @Column({ type: 'date' })
  hiringdate: string;

  @ManyToOne(() => Departament, (departament) => departament.collaborators, {
    nullable: true,
  })
  departament: Departament;

  @ManyToOne(() => Profile, (profile) => profile.collaborators, {
    nullable: true,
  })
  profile: Profile;

  @ManyToOne(() => Collaborator, (collaborators) => collaborators.children, {
    nullable: true,
  })
  supervisor: Collaborator;

  @OneToMany(() => Collaborator, (collaborator) => collaborator.supervisor)
  children: Collaborator[];

  @OneToMany(() => VacationRequest, (request) => request.requestUser)
  requests: VacationRequest[];

  @OneToMany(() => ApprovalVacation, (approvalVacat) => approvalVacat.approval)
  approvalVacation: ApprovalVacation[];

  @Column({
    type: 'enum',
    enum: CollaboratorType,
    default: CollaboratorType.EFFECTIVE,
  })
  type: CollaboratorType;
}
