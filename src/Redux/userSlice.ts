import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

export interface UInterface {
  user: IUser;
}

const initialState: UInterface = {
  user: {
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.user = newUser;
    },
  },
});

export const { addUser } = userSlice.actions;
