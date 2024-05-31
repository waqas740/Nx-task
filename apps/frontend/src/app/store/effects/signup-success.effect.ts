import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthAction } from '../actions';

export const SignUpSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(AuthAction.signupSuccess),
      tap(() => {
        router.navigate(['/signin']);
      })
    );
  },
  { functional: true, dispatch: false }
);
