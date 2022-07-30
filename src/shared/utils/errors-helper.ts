import {
  ConflictException,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';

const customUniqueErrors = (constraint: string): string => {
  switch (constraint) {
    case 'uq_user_email':
      return 'Endereço de email já utilizado em outro usuário';

    default:
      return null;
  }
};

export const handleErrors = (
  error: any,
  defaultError = 'Erro ao efetuar operação',
): Error => {
  if (error instanceof HttpException) {
    throw error;
  } else {
    const { constraint } = error;
    const customError = customUniqueErrors(constraint);
    if (customError) {
      throw new ConflictException(customError);
    } else {
      throw new InternalServerErrorException(defaultError);
    }
  }
};
