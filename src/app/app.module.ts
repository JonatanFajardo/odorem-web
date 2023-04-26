import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from '@angular/common'
// import {  } from "devextreme-angular";
import { DxButtonModule } from 'devextreme-angular';
import { SigninComponent } from './auth/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductosComponent } from './pages/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardV2Component } from './components/product-card-v2/product-card-v2.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
// import { LocalStorageService } from 'angular-web-storage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    ProductosComponent,
    ProductCardComponent,
    ProductCardV2Component,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DxButtonModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxPaginationModule,
    FormsModule,
    // NgxPaginationModule
    // LocalStorageModule.forRoot({
    //   prefix: 'my-app',
    //   storageType: 'localStorage'
    // })
    // DevExtremeMole
  ],
  providers: [ 
    // LocalStorageService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
