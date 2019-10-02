import { CartType, CartActionType, FETCH_CART_SUCCESS } from './types';

const Cart = (state: CartType = null, {
  type, cart,
}: CartActionType): CartType => {
  switch (type) {
    case FETCH_CART_SUCCESS:
      return cart;
    default:
      return state;
  }
};
export default Cart;
