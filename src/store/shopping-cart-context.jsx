import { createContext } from 'react';

export const CartContext = createContext({
  // setting default values for autocompletion
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});
