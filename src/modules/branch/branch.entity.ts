import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Collaborator } from '../collaborator/collaborator.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  // @OneToMany(() => Collaborator, (collaborator) => collaborator.branch)
  // collaborators: Collaborator[];
}
