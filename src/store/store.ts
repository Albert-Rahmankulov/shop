import { configureStore } from '@reduxjs/toolkit';
import shopSlice from "./slices/shopSlice";


export const store = configureStore({
    reducer: {
        shopReducer: shopSlice,
    },
});