import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AppLoadAction } from '../actions';

export const AppLoadRequestEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(AppLoadAction.appLoad),
      tap(() => {
        const authToken: string = <string>localStorage.getItem('token');
        //AppLoadAction.setAuthToken({ token: authToken });
      })
    );
  },
  { functional: true, dispatch: true }
);
