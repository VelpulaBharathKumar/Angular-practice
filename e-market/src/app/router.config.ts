import { RouterModule, Routes } from '@angular/router';

import { ProductsPage } from './pages/products/products.pages';
import { CheckoutPage } from './pages/checkout/checkout.pages';
import { BillingPage } from './pages/billing/billing.pages';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsPage },
  { path: 'billing', component: BillingPage },
  { path: 'checkout', component: CheckoutPage },
];

export const RouterConfig = [
  RouterModule.forRoot(appRoutes, {
    enableTracing: false,
    useHash: false,
  }),
];

export const RouterDeclarations = [
  ProductsPage,
  BillingPage,
  CheckoutPage,
  LoginComponent,
  RegisterComponent,
];
