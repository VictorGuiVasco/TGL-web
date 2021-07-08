import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import authSlice from './slices/authSlice'
import betsSlice from './slices/betsSlices'
import gamesSlice from './slices/gamesSlice'
import usersSlice from './slices/usersSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    bets: betsSlice,
    users: usersSlice,
    games: gamesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
