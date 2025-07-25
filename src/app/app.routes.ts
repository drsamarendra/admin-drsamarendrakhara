import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'products', component: Products },
  { path: 'login', component: Login },
  { path: 'product-details', component: ProductDetails },
  { path: '**', redirectTo: 'dashboard' }
];
