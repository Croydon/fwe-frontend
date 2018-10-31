import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './pages/beer/beer.component';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beer',
    pathMatch: 'full',
  },
  {
    path: 'beer',
    component: BeerComponent,
  },
  {
    path: 'beer/:beerId',
    component: BeerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
