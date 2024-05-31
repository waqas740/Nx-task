import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const LoggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (!Boolean(token)) {
    return true;
  }

  return router.createUrlTree(['dashboard']);
};
