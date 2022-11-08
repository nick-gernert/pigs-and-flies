import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import * as ProductsFeature from './products.reducer';
import * as ProductsSelectors from './products.selectors';
import { Product } from '../../models/product';

@Injectable()
export class ProductsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ProductsSelectors.getProductsLoaded));
  allProducts$ = this.store.pipe(select(ProductsSelectors.getAllProducts));
  selectedProduct$ = this.store.pipe(select(ProductsSelectors.getSelected));
  selectedId$ = this.store.pipe(select(ProductsSelectors.getSelectedId));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ProductsActions.initProducts());
  }

  selectProduct(id: string) {
    this.store.dispatch(ProductsActions.selectProduct({ id }));
  }

  saveProduct(product: Product): void {
    this.store.dispatch(ProductsActions.addProduct({ product }));
  }
}
