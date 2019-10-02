import ProductType from '../Product/types';

export const FETCH_CART_SUCCESS = 'fetchCartSuccess';
export const CLEAR_CART_SUCCESS = 'clearCartSuccess';

export type CartType = ProductType[];

export interface CartActionType {
  type: string;
  cart: CartType;
}
