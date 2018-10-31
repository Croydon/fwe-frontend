import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerComponent } from './pages/beer/beer.component';
import { BeerListItemComponent } from './pages/beer/components/beer-list-item/beer-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BeerComponent, BeerListItemComponent, BeerDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
