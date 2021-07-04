import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BetsProps {
  type: string
  description: string
  range: number
  price: number
  'max-number': number
  color: string
  'min-cart-value': number
}

interface Bets {
  types: Array<BetsProps>
}

const initialState: Array<Bets> = []

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    saveBets(state, action: PayloadAction<Bets>) {
      state.push(action.payload)
    },
  },
})

export const betAction = betsSlice.actions

export default betsSlice.reducer
