import { createSlice } from "@reduxjs/toolkit";

type TCartItem = {
    id: number;
    size: number;
    count: number;
    newPrice: number;
}[];

interface CartSliceState {
    totalPrice: number;
    items: TCartItem;
}
const initialState: CartSliceState = {
    totalPrice: 0,
    items: JSON.parse(localStorage.getItem("itemsToCart") || "") || [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action) {
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size
            );
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.newPrice * obj.count + sum;
            }, 0);
            localStorage.setItem("itemsToCart", JSON.stringify(state.items));
        },
        incrementCount(state, action) {
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size
            );
            findItem && findItem.count++;
            localStorage.setItem("itemsToCart", JSON.stringify(state.items));
        },
        decrementCount(state, action) {
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size
            );
            if (findItem && findItem.count > 0) {
                findItem.count--;
            } else {
            }
            localStorage.setItem("itemsToCart", JSON.stringify(state.items));
        },
        removeItems(state, action) {
            state.items = state.items.filter(
                (obj) =>
                    obj.id !== action.payload.id ||
                    obj.size !== action.payload.size
            );
            localStorage.setItem("itemsToCart", JSON.stringify(state.items));
        },
        clearItems(state) {
            state.items = [];
            localStorage.setItem("itemsToCart", JSON.stringify(state.items));
        },
    },
});

export const {
    addItems,
    removeItems,
    clearItems,
    incrementCount,
    decrementCount,
} = cartSlice.actions;
export default cartSlice.reducer;
