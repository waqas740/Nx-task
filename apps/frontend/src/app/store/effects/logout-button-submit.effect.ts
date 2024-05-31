import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthAction } from '../actions';

export const LogoutButtonSubmitEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(AuthAction.logout),
      tap(() => {
        localStorage.removeItem('token');
        router.navigate(['/signin']);
      })
    );
  },
  { functional: true, dispatch: false }
);
