import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Checkout } from './checkout/checkout';
import { Orders } from './orders/orders';

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
  {
    path: 'orders',
    component: Orders,
  },
];
