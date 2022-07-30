import { getRepository } from 'typeorm';
import { BaseQueryParametersDto } from '../dtos/base-query-parameters.dto';

// eslint-disable-next-line max-len
export const createQueryPaginationTypeorm = (
  entity: string,
  alias: string,
  queryDto: BaseQueryParametersDto,
) => {
  queryDto.page = !queryDto.page || queryDto.page < 1 ? 1 : queryDto.page;
  queryDto.limit =
    !queryDto.limit || queryDto.limit > 100 ? 100 : queryDto.limit;

  const query = getRepository(entity).createQueryBuilder(alias);
  query.skip((queryDto.page - 1) * queryDto.limit);
  query.take(queryDto.limit);
  // query.orderBy(queryDto.sort ? JSON.parse(queryDto.sort) : undefined);
  return query;
};
