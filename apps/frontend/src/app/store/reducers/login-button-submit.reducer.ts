import { AuthAction } from '../actions';
import { State } from '../state';

export const LoginButtonSubmitReducer = (state: State) => {
  return { ...state, isLoading: true };
};

export const LoginSuccessReducer = (
  state: State,
  { token }: ReturnType<typeof AuthAction.loginSuccess>
) => {
  return { ...state, token, isLoading: false } as State;
};

export const LoginFailureReducer = (
  state: State,
  { error }: ReturnType<typeof AuthAction.loginFailure>
) => {
  return { ...state, token: null, error, isLoading: false } as State;
};
