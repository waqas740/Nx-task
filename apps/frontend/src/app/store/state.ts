import { Product } from '../interface/product.interface';

export const initialState: State = {
  token: null,
  error: null,
  isLoading: false,
  products: [],
};

export interface State {
  token: string | null;
  error: string | null;
  isLoading: boolean;
  products: Product[];
}
