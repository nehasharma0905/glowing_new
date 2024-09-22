import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsApi, getItemApi } from "../../api/productsApi";

export const getAllProductsThunk = createAsyncThunk(
  "product/getAllProductsThunk",
  async (_, thunkAPI) => {
    try {
      const response = await getAllProductsApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getItemDetailsThunk = createAsyncThunk(
  "product/getItemDetailsThunk",
  async (productId, thunkAPI) => {
    try {
      const response = await getItemApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
