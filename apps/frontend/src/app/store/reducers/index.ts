import { ProductLoadSuccessReducer } from './product-load-request-reducer';
import { AppLoadAction, ProductAction } from './../actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from '../state';
import { AuthAction } from '../actions';
import {
  LoginButtonSubmitReducer,
  LoginSuccessReducer,
  LoginFailureReducer,
} from './login-button-submit.reducer';
import {
  SignUpButtonSubmitReducer,
  SignUpFailureReducer,
  SignUpSuccessReducer,
} from './signup-button-submit.reducer';
import { LogoutButtonSubmitReducer } from './logout.button-submit.reducer';
import { SetTokenRequestReducer } from './set-token-request.reducer';

const _Reducer = createReducer(
  initialState,
  on(AuthAction.login, LoginButtonSubmitReducer),
  on(AuthAction.loginSuccess, LoginSuccessReducer),
  on(AuthAction.loginFailure, LoginFailureReducer),
  on(AuthAction.signup, SignUpButtonSubmitReducer),
  on(AuthAction.signupSuccess, SignUpSuccessReducer),
  on(AuthAction.signupFailure, SignUpFailureReducer),
  on(ProductAction.productLoadSuccess, ProductLoadSuccessReducer),
  on(AuthAction.logout, LogoutButtonSubmitReducer),
  on(AppLoadAction.setAuthToken, SetTokenRequestReducer)
);

export function Reducer(state: State | undefined, action: Action): State {
  return _Reducer(state, action);
}
