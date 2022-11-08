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

export const selectProduct = createAction(
  '[Products] Selected a product',
  props<{ id: string }>()
);

export const upsertProduct = createAction(
  '[Products] Upsert Product',
  props<{ product: Product }>()
);

export const addProduct = createAction(
  '[Products/API] Add a product',
  props<{ product: Product }>()
)

export const addProductSuccess = createAction(
  '[Products/API] Add a product Success',
  props<{ product: Product }>()
)

export const addProductFail = createAction(
  '[Products/API] Add a product Fail',
  props<{ error: any }>()
)

export const updateProduct = createAction(
  '[Products/API] Update a product',
  props<{ product: Product }>()
)

export const updateProductSuccess = createAction(
  '[Products/API] Update a product Success',
  props<{ product: Product }>()
)

export const updateProductFail = createAction(
  '[Products/API] Update a product fail',
  props<{ error: any }>()
)

export const removeProduct = createAction(
  '[Products/API] Remove product',
  props<{ product: Product }>()
)

export const removeProductSuccess = createAction(
  '[Products/API] Remove product success',
  props<{ product: Product }>()
)

export const removeProductFail = createAction(
  '[Products/API] Remove product fail',
  props<{ error: any }>()
)
