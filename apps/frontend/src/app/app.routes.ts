import { Routes } from '@angular/router';
import { SignInComponent } from './pages/auth/signin/signin.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/signIn',
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signIn',
      },
      {
        path: 'signIn',
        component: SignInComponent,
      },
    ],
  },
];
