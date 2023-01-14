import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slices/filtersSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        filter: filtersSlice,
        product: productSlice,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
