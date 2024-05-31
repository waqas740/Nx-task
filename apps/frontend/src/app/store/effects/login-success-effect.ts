import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthAction } from '../actions';

export const LoginSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(AuthAction.loginSuccess),
      tap(({ token }) => {
        localStorage.setItem('token', token);
        router.navigate(['/dashboard']);
      })
    );
  },
  { functional: true, dispatch: false }
);
