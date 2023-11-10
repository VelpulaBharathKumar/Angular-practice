import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Pipe, PipeTransform } from '@angular/core';

import { dirConfig } from './dir.config';

import { RouterConfig, RouterDeclarations } from './router.config';

import { ProductsModel } from './model/products.model';
import { BillingFormModel } from './model/billingformfields.model';
import { CompanyDetailsModel } from './model/companydetails.model';

import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterConfig,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    dirConfig,
    RouterDeclarations,
    FilterPipe,
    SortPipe,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    ProductsModel,
    HttpClient,
    BillingFormModel,
    CompanyDetailsModel,
    StorageService,
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
