import { createSlice } from "@reduxjs/toolkit";
import { TProductState } from "./product.type";
import { getAllProductsThunk } from "./product.thunk";

const initialState: TProductState = {
  allProducts: {
    data: [],
    error: null,
    isLoading: false,
  },
  product: {
    data: null,
    error: null,
    isLoading: false,
  },
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsThunk.pending, (state) => {
        state.allProducts.isLoading = true;
      })
      .addCase(getAllProductsThunk.fulfilled, (state, action) => {
        state.allProducts.isLoading = false;
        state.allProducts.data = action.payload;
      })
      .addCase(getAllProductsThunk.rejected, (state, action) => {
        state.allProducts.isLoading = false;
        state.allProducts.error = action.payload;
      });
  },
});

export const ProductActions = productSlice.actions;
export const ProductReducer = productSlice.reducer;
