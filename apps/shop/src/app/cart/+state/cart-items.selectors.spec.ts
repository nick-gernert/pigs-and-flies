import { CartItem } from '../../models/cart-item';
import {
  cartItemsAdapter,
  CartItemsPartialState,
  initialCartItemsState,
} from './cart-items.reducer';
import * as CartItemsSelectors from './cart-items.selectors';

describe('CartItems Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCartItemsId = (it: CartItem) => it.id;
  const createCartItemsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CartItem);

  let state: CartItemsPartialState;

  beforeEach(() => {
    state = {
      cartItems: cartItemsAdapter.setAll(
        [
          createCartItemsEntity('PRODUCT-AAA'),
          createCartItemsEntity('PRODUCT-BBB'),
          createCartItemsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCartItemsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('CartItems Selectors', () => {
    it('getAllCartItems() should return the list of CartItems', () => {
      const results = CartItemsSelectors.getAllCartItems(state);
      const selId = getCartItemsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CartItemsSelectors.getSelected(state) as CartItem;
      const selId = getCartItemsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCartItemsLoaded() should return the current "loaded" status', () => {
      const result = CartItemsSelectors.getCartItemsLoaded(state);

      expect(result).toBe(true);
    });

    it('getCartItemsError() should return the current "error" state', () => {
      const result = CartItemsSelectors.getCartItemsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
