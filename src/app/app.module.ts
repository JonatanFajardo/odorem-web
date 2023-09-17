import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CommonModule, NgOptimizedImage} from '@angular/common'
import { SigninComponent } from './auth/signin/signin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductosComponent } from './pages/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { ProductCardV2Component } from './components/product-card-v2/product-card-v2.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductosDetalleComponent } from './pages/productos/productos-detalle/productos-detalle.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FaqComponent } from './pages/faq/faq.component';
import { NavComponent } from './shared/nav/nav.component';
import { NoticiasComponent } from './pages/noticias/noticias.component'; 
// import { RetryInterceptor } from './Interceptors/RetryInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    ProductosComponent, 
    ProductCardV2Component,
    ShoppingCartComponent,
    ProductosDetalleComponent,
    FaqComponent,
    NavComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxPaginationModule,
    FormsModule,
    CarouselModule,
    CommonModule, 
  ],
  providers: [ 
    // LocalStorageService 
    // {
    //   provide:HTTP_INTERCEPTORS ,
    //   useClass: RetryInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
