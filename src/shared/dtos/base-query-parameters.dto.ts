export abstract class BaseQueryParametersDto {
  sort: 'ASC' | 'DESC' | 1 | -1;
  page: number;
  limit: number;
  sortBy?: string;
}
