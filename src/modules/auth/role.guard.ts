import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserRole } from '../user/user-role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userRole: UserRole = request.user.role;

    const requiredRoles: UserRole[] = this.reflector.get<UserRole[]>(
      'role',
      context.getHandler(),
    );

    if (!requiredRoles.length) return true;

    if (userRole === UserRole.ADMIN) return true;

    const containsRole = requiredRoles.includes(userRole);

    return containsRole;
  }
}
