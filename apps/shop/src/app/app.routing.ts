import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
