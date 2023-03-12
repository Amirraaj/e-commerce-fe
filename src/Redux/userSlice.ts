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
      console.log(action)
      const newUser = action.payload;
      state.user = newUser;
    },
  },
});

export const getUser = (state: any) => ({...state.userReducer.user,  isAuthenticated: !!state.userReducer.user.email}); 

export const { addUser } = userSlice.actions;
