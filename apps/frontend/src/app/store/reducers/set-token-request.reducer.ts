import { State } from '../state';
import { AppLoadAction } from '../actions';

export const SetTokenRequestReducer = (
  state: State,
  { token }: ReturnType<typeof AppLoadAction.setAuthToken>
) => {
  return { ...state, token: token };
};
