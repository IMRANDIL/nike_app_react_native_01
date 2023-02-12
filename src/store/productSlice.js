import {createSlice} from '@reduxjs/toolkit';
import data from '../data/products';

const initialState = {
  products: data,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
});
