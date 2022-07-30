import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class GlobalSettings {
  @PrimaryColumn()
  key: string;

  @Column()
  value: string;
}
