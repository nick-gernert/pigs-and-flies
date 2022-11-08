import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem } from '../../models/cart-item';
import {
  CARTITEMS_FEATURE_KEY,
  CartItemsState,
  cartItemsAdapter,
} from './cart-items.reducer';

// Lookup the 'CartItems' feature state managed by NgRx
export const getCartItemsState = createFeatureSelector<CartItemsState>(
  CARTITEMS_FEATURE_KEY
);

const { selectAll, selectEntities } = cartItemsAdapter.getSelectors();

export const getCartItemsError = createSelector(
  getCartItemsState,
  (state: CartItemsState) => state.error
);

export const getAllCartItems = createSelector(
  getCartItemsState,
  (state: CartItemsState) => selectAll(state)
);

export const getCartItemsEntities = createSelector(
  getCartItemsState,
  (state: CartItemsState) => selectEntities(state)
);

export const getTotalItems = createSelector(
  getAllCartItems,
  (items: CartItem[]) =>
    items.reduce(
      (accumulator, value): number => accumulator + value.quantity,
      0
    )
);
