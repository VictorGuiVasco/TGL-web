import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UsersProps {
  name: string
  email: string
  password: string
}

const initialState: Array<UsersProps> = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createNewUser(state, action: PayloadAction<UsersProps>) {
      state.push(action.payload)
    },
  },
})

export const usersAction = usersSlice.actions

export default usersSlice.reducer
