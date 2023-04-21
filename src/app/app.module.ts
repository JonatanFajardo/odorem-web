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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DxButtonModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxPaginationModule
    // NgxPaginationModule
    // DevExtremeMole
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
