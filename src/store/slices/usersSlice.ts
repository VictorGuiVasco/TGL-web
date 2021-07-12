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
    updateUser(state, action: PayloadAction<UsersProps>) {
      for (var i in state) {
        if (state[i].email === action.payload.email) {
          state[i].name = action.payload.name
          state[i].email = action.payload.email
          state[i].password = action.payload.password
          break
        }
      }
    },
  },
})

export const usersAction = usersSlice.actions

export default usersSlice.reducer
