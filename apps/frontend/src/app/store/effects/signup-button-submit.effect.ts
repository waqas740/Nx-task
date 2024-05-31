import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs/operators';
import { AuthAction } from '../actions';
import { AuthService } from '../../pages/auth/auth.service';

export const SigUpButtonSubmitEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(AuthAction.signup),
      exhaustMap(async ({ name, email, password }) => {
        try {
          const { user_id } = await authService.signup(name, email, password);

          return AuthAction.signupSuccess();
        } catch (error: any) {
          return AuthAction.signupFailure({ error: error.message });
        }
      })
    );
  },
  { functional: true }
);
