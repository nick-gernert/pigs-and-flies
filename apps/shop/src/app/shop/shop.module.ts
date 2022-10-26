import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import { ProductsFacade } from './+state/products.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShopRoutingModule,
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.productsReducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsFacade],
})
export class ShopModule {}
