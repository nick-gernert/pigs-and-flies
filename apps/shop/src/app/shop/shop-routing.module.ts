import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent, ShopComponent } from './containers';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
