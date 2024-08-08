import { configureStore } from '@reduxjs/toolkit';
import productReducer from './../features/productList/ProductSlice';
import authReducer from './../features/auth/AuthSlice'


export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer
  },
});
