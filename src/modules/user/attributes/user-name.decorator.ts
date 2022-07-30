import { applyDecorators } from '@nestjs/common';
import { IsOptional, MaxLength } from 'class-validator';

export function IsUserName(required = true) {
  const MAX_CHARACTERS = 100;
  return applyDecorators(
    required
      ? MaxLength(MAX_CHARACTERS, {
          message: `Informe um nome do usuário com no máximo ${MAX_CHARACTERS} caracteres`,
        })
      : IsOptional(),
  );
}
