import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Checkout } from './checkout/checkout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
  {
    path: 'checkout',
    component: Checkout,
  },
];
