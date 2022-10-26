import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import * as ProductsActions from './products.actions';
import * as ProductsFeature from './products.reducer';
import { ProductsService } from './products.service';

@Injectable()
export class ProductsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      fetch({
        run: () => {
          return this.products
            .getProducts()
            .pipe(
              map((products) =>
                ProductsActions.loadProductsSuccess({ products })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ProductsActions.loadProductsFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly products: ProductsService
  ) {}
}
