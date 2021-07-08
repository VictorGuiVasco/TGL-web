import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UsersProps {
  name?: string
  email?: string
  password?: string
}

interface AuthProps {
  user: UsersProps | undefined
  isLoggedIn: boolean
}

const initialState: AuthProps = { 
  user: { name: '', email: '', password: '' }, 
  isLoggedIn: false 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UsersProps>) {
      state.user = action.payload
      state.isLoggedIn = true
    },
    logout(state) {
      state.user = { name: '', email: '', password: '' }
      state.isLoggedIn = false
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
