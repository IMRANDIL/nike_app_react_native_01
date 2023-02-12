import {createSlice} from '@reduxjs/toolkit';

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
    },
  },
});
