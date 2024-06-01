import { firstValueFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/frontend/src/environments/environment';

interface LoginResponse {
  access_token: string;
}

interface SignUpResponse {
  user_id: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async signup(
    name: string,
    email: string,
    password: string
  ): Promise<SignUpResponse> {
    const response = await firstValueFrom(
      this.http.post<SignUpResponse>(`/api/auth/signup`, {
        name,
        email,
        password,
      })
    ).catch((error) => {
      throw error;
    });
    return response;
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await firstValueFrom(
      this.http.post<LoginResponse>(`/api/auth/login`, {
        email,
        password,
      })
    ).catch((error) => {
      if (error.status == 401) {
        error.message = 'Email or password credential are not correct';
      }

      throw error;
    });

    return response;
  }
}
