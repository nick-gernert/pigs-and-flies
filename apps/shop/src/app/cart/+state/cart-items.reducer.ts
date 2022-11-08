import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { CartItem } from '../../models/cart-item';

import * as CartItemsActions from './cart-items.actions';

export const CARTITEMS_FEATURE_KEY = 'cartItems';

export interface CartItemsState extends EntityState<CartItem> {
  error?: string | null; // last known error (if any)
}

export interface CartItemsPartialState {
  readonly [CARTITEMS_FEATURE_KEY]: CartItemsState;
}

export const cartItemsAdapter: EntityAdapter<CartItem> =
  createEntityAdapter<CartItem>();

export const initialCartItemsState: CartItemsState =
  cartItemsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialCartItemsState,
  on(CartItemsActions.initCartItems, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CartItemsActions.loadCartItemsSuccess, (state, { cartItems }) =>
    cartItemsAdapter.setAll(cartItems, { ...state, loaded: true })
  ),
  on(CartItemsActions.loadCartItemsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CartItemsActions.addItemToCart, (state, { product }) => {
    const cartItems = selectAll(state);
    const index = cartItems.findIndex((value) => value.product.id === product.id);

    const item: CartItem = index !== -1 ? { ...cartItems[index] } : { id: uuid(), quantity: 1, product };

    if (index !== -1) {
      item.quantity += 1;
    }

    return cartItemsAdapter.upsertOne(item, state);
  }),
  on(CartItemsActions.removeItemToCart, (state, { product }) => {
    const cartItems = selectAll(state);
    const index = cartItems.findIndex((value) => value.product.id === product.id);
    const item = { ...cartItems[index] };
    item.quantity -= 1;

    if (item.quantity === 0) {
      return cartItemsAdapter.removeOne(item.id, state);
    }

    return cartItemsAdapter.upsertOne(item, state);
  })
);

const { selectAll } = cartItemsAdapter.getSelectors();

export function cartItemsReducer(
  state: CartItemsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
