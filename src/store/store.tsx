import { configureStore } from "@reduxjs/toolkit";
import productsRequestSlice from "../features/productsRequestSlice";
import userSlice from "../features/userSlice";

type userSelect = {
  image: string;
  name: string;
  username: string;
}

const store = configureStore({
  reducer:{
    user:userSlice,
    productRequest:productsRequestSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store