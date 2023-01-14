import { createSlice } from "@reduxjs/toolkit";

interface FiltersSliceState {
    filterByGender: string;
    filterByType: string;
    searchValue: string;
    sortType: string;
}

const initialState: FiltersSliceState = {
    filterByGender: "",
    filterByType: "",
    searchValue: "",
    sortType: "grade&order=desc",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setSortType(state, action) {
            state.sortType = action.payload;
        },
        setFilterByGender(state, action) {
            state.filterByGender = action.payload;
        },
        setFilterByType(state, action) {
            state.filterByType = action.payload;
        },
    },
});
export const {
    setSearchValue,
    setSortType,
    setFilterByGender,
    setFilterByType,
} = filterSlice.actions;

export default filterSlice.reducer;
