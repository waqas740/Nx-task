import { Routes } from '@angular/router';
import { SignInComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { AuthenticateGuard } from './guards/authenticateGaurd';
import { LoggedInGuard } from './guards/loggedInGuard';

export const appRoutes: Routes = [
  {
    path: 'signin',
    component: SignInComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticateGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
];
