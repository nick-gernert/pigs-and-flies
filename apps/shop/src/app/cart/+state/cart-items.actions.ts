import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product';

export const initCartItems = createAction('[CartItems Page] Init');

export const loadCartItemsSuccess = createAction(
  '[CartItems/API] Load CartItems Success',
  props<{ cartItems: CartItem[] }>()
);

export const loadCartItemsFailure = createAction(
  '[CartItems/API] Load CartItems Failure',
  props<{ error: any }>()
);

export const addItemToCart = createAction(
  '[CartItems] Add item to cart',
  props<{ product: Product }>()
);

export const removeItemToCart = createAction(
  '[CartItems] Remove item from cart',
  props<{ product: Product}>()
)
