export const initialState: State = {
  token: null,
  users: null,
  error: null,
  isLoading: false,
  products: [],
};

export interface State {
  token: string | null;
  error: string | null;
  isLoading: boolean;
  users: any;
  products: any;
}
