import { FETCH_CART_SUCCESS, CartActionType } from './types';
import cartData from './data';

// use some fake data since we do not have a backend
const fetchCartSuccess = (): CartActionType => ({
  type: FETCH_CART_SUCCESS,
  cart: cartData,
});

export const fetchCart = () => fetchCartSuccess();

export default fetchCart;
