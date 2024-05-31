import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { registeredEffects } from './store/effects';
import { Reducer } from './store/reducers';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth-interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptors';
import { BaseUrlInterceptor } from './core/interceptors/base-url-interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptors([BaseUrlInterceptor, AuthInterceptor, ErrorInterceptor])
    ),

    provideStore({ global: Reducer }),
    provideEffects(registeredEffects),
    provideStoreDevtools({
      name: 'Dev Tools',
      maxAge: 25,
      logOnly: isDevMode(),
    }),
  ],
};
