import { applyDecorators } from '@nestjs/common';
import { IsOptional, MinLength } from 'class-validator';

export function IsUserPassword(required = true) {
  return applyDecorators(
    required
      ? MinLength(0, {
          message: 'Informe uma senha com no mínimo 6 caracteres',
        })
      : IsOptional(),
  );
}
