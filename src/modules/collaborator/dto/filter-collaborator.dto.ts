import { BaseQueryParametersDto } from 'src/shared/dtos/base-query-parameters.dto';

export class FilterCollaboratorDto extends BaseQueryParametersDto {
  sort: 'ASC' | 'DESC' | 1 | -1;
  search: string;
  sortBy: string;
}
