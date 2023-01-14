import { createSlice } from "@reduxjs/toolkit";

type TProductItem = {
    id: number;
    grade: number;
    affiliation: string;
    name: string;
    type: string;
    whereType: string;
    description: string;
    imgUrl: string[];
    oldPrice: number;
    newPrice: number;
    size: string[];
    characteristics: {
        affiliation: string;
        compound: string;
        seasonality: string;
        color: string;
        countryOfOrigin: string;
    };
}[];

interface CartSliceState {
    productItem: TProductItem;
    productId: string;
}

const initialState: CartSliceState = {
    productItem: [],
    productId: JSON.parse(localStorage.getItem("productId") || ""),
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductItem(state, action) {
            state.productItem = action.payload;
        },
        setProductId(state, action) {
            state.productId = action.payload;
        },
    },
});

export const { setProductItem, setProductId } = productSlice.actions;
export default productSlice.reducer;
