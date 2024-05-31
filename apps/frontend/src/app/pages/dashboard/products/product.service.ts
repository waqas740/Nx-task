import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  async getProducts(): Promise<any> {
    const response = await firstValueFrom(
      this.http.get<any>(`/api/products`)
    ).catch((error) => {
      console.log(error);
      throw error;
    });
    return response;
  }
}
