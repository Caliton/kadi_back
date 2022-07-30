export class CollaboratorBulkDto {
  readonly register: string;
  readonly name: string;
  readonly email: string;
  readonly hiringDate: string;
  // readonly birthDay: string;
  readonly periodOk: number;
  readonly daysEnjoyed: number;
  readonly useApplication: string;
}

export class BulkCollaboratorsDto {
  readonly data: CollaboratorBulkDto[];
}
