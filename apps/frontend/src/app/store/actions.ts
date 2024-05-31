import { createAction, props } from '@ngrx/store';

const appLoad = createAction('[App] load');

const login = createAction(
  '[Auth] User Login',
  props<{ email: string; password: string }>()
);

const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string }>()
);

const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

const signup = createAction(
  '[Auth] User signup',
  props<{ email: string; password: string; name: string }>()
);

const signupSuccess = createAction('[Auth] signup Success');

const signupFailure = createAction(
  '[Auth] signup Failure',
  props<{ error: string }>()
);
const logout = createAction('[Auth] logout');

const setAuthToken = createAction(
  '[Token] set auth token',
  props<{ token: string }>()
);

const productLoadRequest = createAction('[Product] load request');
const productLoadSuccess = createAction(
  '[Product] load successfully',
  props<{ products: any[] }>()
);
const productLoadFailure = createAction(
  '[Product] load failure',
  props<{ error: string }>()
);

export const AuthAction = {
  login,
  loginSuccess,
  loginFailure,
  signup,
  signupSuccess,
  signupFailure,
  logout,
};
export const ProductAction = {
  productLoadFailure,
  productLoadSuccess,
  productLoadRequest,
};
export const AppLoadAction = {
  appLoad,
  setAuthToken,
};
