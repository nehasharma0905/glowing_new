import { createSlice } from "@reduxjs/toolkit";
import { TUserState } from "./user.type";

const initialState: TUserState = {
  name: "",
  email: "",
  auth: {
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const UserActions = userSlice.actions;
export const UserReducer = userSlice.reducer;
