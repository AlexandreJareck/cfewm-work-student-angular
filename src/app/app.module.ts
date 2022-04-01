import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    OrderService,
    ProductService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
