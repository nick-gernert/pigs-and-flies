import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCartItems from './+state/cart-items.reducer';
import { CartItemsEffects } from './+state/cart-items.effects';
import { CartItemsFacade } from './+state/cart-items.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature(
      fromCartItems.CARTITEMS_FEATURE_KEY,
      fromCartItems.cartItemsReducer
    ),
    EffectsModule.forFeature([CartItemsEffects]),
  ],
  providers: [CartItemsFacade],
})
export class CartModule {}
