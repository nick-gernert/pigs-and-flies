import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product';

export const initProducts = createAction('[Products Page] Init');

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);
