import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  async getProducts(): Promise<Product[]> {
    const response = await firstValueFrom(
      this.http.get<Product[]>(`/api/products`)
    ).catch((error) => {
      throw error;
    });
    return response;
  }
}
