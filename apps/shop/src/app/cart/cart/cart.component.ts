import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemListComponentModule } from '../components/cart-item-list/cart-item-list.component';
import { CartItemsFacade } from '../+state/cart-items.facade';

@Component({
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems = this.cartFacade.allCartItems$;

  constructor(private cartFacade: CartItemsFacade) {}
}

@NgModule({
  imports: [CommonModule, CartItemListComponentModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartComponentModule {}
