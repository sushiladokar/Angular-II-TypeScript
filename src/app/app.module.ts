import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharePriceComponent } from './share-price/share-price.component';
import { PriceQuantityViewComponent } from './price-quantity-view/price-quantity-view.component';
import { RealEstateHomeComponent } from './real-estate/real-estate-home/real-estate-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    PagenotfoundComponent,
    SharePriceComponent,
    PriceQuantityViewComponent,
    RealEstateHomeComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
