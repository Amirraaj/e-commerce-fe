import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'
import { userSlice } from './userSlice'
const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
    userReducer: userSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export default store;