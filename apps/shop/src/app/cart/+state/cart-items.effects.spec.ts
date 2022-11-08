import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CartItemsActions from './cart-items.actions';
import { CartItemsEffects } from './cart-items.effects';

describe('CartItemsEffects', () => {
  let actions: Observable<Action>;
  let effects: CartItemsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CartItemsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CartItemsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CartItemsActions.initCartItems() });

      const expected = hot('-a-|', {
        a: CartItemsActions.loadCartItemsSuccess({ cartItems: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
