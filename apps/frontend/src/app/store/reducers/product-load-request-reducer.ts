import { ProductAction } from './../actions';
import { AuthAction } from '../actions';
import { State } from '../state';

export const ProductLoadReducer = (state: State) => {
  return { ...state, isLoading: true, products: [] };
};

export const ProductLoadSuccessReducer = (
  state: State,
  { products }: ReturnType<typeof ProductAction.productLoadSuccess>
) => {
  return { ...state, products: products, isLoading: false } as State;
};

export const productLoadFailureReducer = (
  state: State,
  { error }: ReturnType<typeof ProductAction.productLoadFailure>
) => {
  return { ...state, error, isLoading: false } as State;
};
