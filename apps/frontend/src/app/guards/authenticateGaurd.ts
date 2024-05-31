import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';

export const AuthenticateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (Boolean(token)) {
    return true;
  }

  return router.createUrlTree(['signin']);
};
