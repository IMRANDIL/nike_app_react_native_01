import {createSlice} from '@reduxjs/toolkit';
import data from '../data/products';

const initialState = {
  products: data,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find(p => p.id === productId);
    },
  },
});
