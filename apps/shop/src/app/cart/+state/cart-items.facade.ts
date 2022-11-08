import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { Product } from '../../models/product';

import * as CartItemsActions from './cart-items.actions';
import * as CartItemsFeature from './cart-items.reducer';
import * as CartItemsSelectors from './cart-items.selectors';

@Injectable()
export class CartItemsFacade {

  allCartItems$ = this.store.pipe(select(CartItemsSelectors.getAllCartItems));
  totalItems$ = this.store.pipe(select(CartItemsSelectors.getTotalItems));

  constructor(private readonly store: Store) {}


  init() {
    this.store.dispatch(CartItemsActions.initCartItems());
  }

  addToCart(product: Product): void {
    this.store.dispatch(CartItemsActions.addItemToCart({ product }));
  }

  removeFromCart(product: Product): void {
    this.store.dispatch(CartItemsActions.removeItemToCart({ product }));
  }
}
