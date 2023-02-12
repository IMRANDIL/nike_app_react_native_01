import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;

      const findProduct = state.items.find(
        item => item.product.id === newProduct.id,
      );

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.items.push({
          product: newProduct,
          quantity: 1,
        });
      }
    },
    changeQuantity: (state, action) => {
      const {productId, amount} = action.payload;
      const cartItem = state.items.find(item => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(item => item !== cartItem);
      }
    },
  },
});

export const selectNumberOfItems = state => state.cart.items.length;

export const selectSubTotal = state =>
  state.cart.items.reduce((sum, cartItem) => {
    return sum + cartItem.product.price * cartItem.quantity;
  }, 0);

const cartSelector = state => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubTotal,
  (cart, subTotal) => (subTotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee),
);
