import { createSelector } from '@ngrx/store';
import { State } from './state';

const selectGlobal = (state: any) => state.global as State;

export const selectToken = createSelector(selectGlobal, (state) => state.token);

export const selectError = createSelector(selectGlobal, (state) => state.error);

export const selectIsLoading = createSelector(
  selectGlobal,
  (state) => state.isLoading
);
export const selectProducts = createSelector(
  selectGlobal,
  (state) => state.products
);
