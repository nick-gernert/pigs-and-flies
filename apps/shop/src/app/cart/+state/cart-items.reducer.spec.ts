import { Action } from '@ngrx/store';

import * as CartItemsActions from './cart-items.actions';
import { CartItemsEntity } from './cart-items.models';
import {
  CartItemsState,
  initialCartItemsState,
  cartItemsReducer,
} from './cart-items.reducer';

describe('CartItems Reducer', () => {
  const createCartItemsEntity = (id: string, name = ''): CartItemsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid CartItems actions', () => {
    it('loadCartItemsSuccess should return the list of known CartItems', () => {
      const cartItems = [
        createCartItemsEntity('PRODUCT-AAA'),
        createCartItemsEntity('PRODUCT-zzz'),
      ];
      const action = CartItemsActions.loadCartItemsSuccess({ cartItems });

      const result: CartItemsState = cartItemsReducer(
        initialCartItemsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = cartItemsReducer(initialCartItemsState, action);

      expect(result).toBe(initialCartItemsState);
    });
  });
});
