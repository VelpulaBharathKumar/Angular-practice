import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsPage } from './products/products.pages';
import { BillingPage } from './billing/billing.pages';
import { CheckoutPage } from './checkout/checkout.pages';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsPage },
  { path: 'billing', component: BillingPage },
  { path: 'checkout', component: CheckoutPage },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
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
