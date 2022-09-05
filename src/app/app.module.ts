
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WalletComponent } from './wallet/wallet.component';
import { TransctionComponent } from './transction/transction.component';
import { DataTablesModule } from 'angular-datatables';
import { Transaction2Component } from './transaction2/transaction2.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoinComponent } from './coin/coin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    WalletComponent,
    TransctionComponent,
    Transaction2Component,
    PortfolioComponent,
    CoinComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    CarouselModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
