import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthAction } from '../actions';
import { AuthService } from '../../pages/auth/auth.service';

export const LoginButtonSubmitEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(AuthAction.login),
      exhaustMap(async ({ email, password }) => {
        try {
          const { access_token } = await authService.login(email, password);

          return AuthAction.loginSuccess({ token: access_token });
        } catch (error: any) {
          return AuthAction.loginFailure({ error: error.message });
        }
      })
    );
  },
  { functional: true }
);
