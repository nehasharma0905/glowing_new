import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSignUp, userLogin } from "./../../api/authApi";

export const signUpThunk = createAsyncThunk(
  "user/signUpThunk",
  async (userName: string, thunkAPI) => {
    try {
      const response = await userSignUp(userName);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "user/loginThunk",
  async (_, thunkAPI) => {
    try {
      const response = await userLogin();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
