import { AuthAction } from '../actions';
import { State } from '../state';

export const SignUpButtonSubmitReducer = (state: State) => {
  return { ...state, isLoading: true };
};

export const SignUpSuccessReducer = (state: State) => {
  return { ...state, token: null, isLoading: false } as State;
};

export const SignUpFailureReducer = (
  state: State,
  { error }: ReturnType<typeof AuthAction.signupFailure>
) => {
  return { ...state, error, isLoading: false } as State;
};
