import { State, initialState } from '../state';

export const LogoutButtonSubmitReducer = (state: State) => {
  return { ...state, ...initialState };
};
