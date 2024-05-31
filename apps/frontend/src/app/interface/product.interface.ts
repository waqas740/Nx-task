export interface Product {
  name: string;
  price: number;
  status: string;
  quantity: number;
  review: {
    rating: number;
    comment: string;
    date: Date;
  }[];
}
