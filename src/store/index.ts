import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import usersSlice from './slices/usersSlice'

const store = configureStore({
  reducer: {
    users: usersSlice
  }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
