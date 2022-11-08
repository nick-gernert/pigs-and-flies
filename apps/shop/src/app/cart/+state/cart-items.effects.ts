import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CartItemsActions from './cart-items.actions';
import * as CartItemsFeature from './cart-items.reducer';

@Injectable()
export class CartItemsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartItemsActions.initCartItems),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CartItemsActions.loadCartItemsSuccess({ cartItems: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CartItemsActions.loadCartItemsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
