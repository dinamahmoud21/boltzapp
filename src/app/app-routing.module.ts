import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransctionComponent } from './transction/transction.component';
import { Transaction2Component } from './transaction2/transaction2.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoinComponent } from './coin/coin.component';
const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path: 'wallet' ,component:WalletComponent},
  {path: 'Transaction' ,component:TransctionComponent},
  {path: 'Transaction2' ,component:Transaction2Component},
  {path: 'portfolio' ,component:PortfolioComponent},
  {path: 'coin' ,component:CoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
