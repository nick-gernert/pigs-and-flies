import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as CartItemsActions from './cart-items.actions';
import { CartItemsEffects } from './cart-items.effects';
import { CartItemsFacade } from './cart-items.facade';
import { CartItemsEntity } from './cart-items.models';
import {
  CARTITEMS_FEATURE_KEY,
  CartItemsState,
  initialCartItemsState,
  cartItemsReducer,
} from './cart-items.reducer';
import * as CartItemsSelectors from './cart-items.selectors';

interface TestSchema {
  cartItems: CartItemsState;
}

describe('CartItemsFacade', () => {
  let facade: CartItemsFacade;
  let store: Store<TestSchema>;
  const createCartItemsEntity = (id: string, name = ''): CartItemsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CARTITEMS_FEATURE_KEY, cartItemsReducer),
          EffectsModule.forFeature([CartItemsEffects]),
        ],
        providers: [CartItemsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CartItemsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCartItems$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCartItems$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCartItemsSuccess` to manually update list
     */
    it('allCartItems$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCartItems$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CartItemsActions.loadCartItemsSuccess({
          cartItems: [
            createCartItemsEntity('AAA'),
            createCartItemsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allCartItems$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
