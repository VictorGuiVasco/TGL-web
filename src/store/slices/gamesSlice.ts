import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GamesProps {
  type: string
  numbers: string
  price: string
  color: string
  date?: string
}

const initialState: Array<GamesProps> = [
  {
    type: 'Lotofácio',
    numbers: '01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25',
    price: 'R$ 2,50',
    color: '#7F3992',
    date: '08/07/2021'
  },
]

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGames(state, action: PayloadAction<GamesProps>) {
      let today = new Date()
      let dd: number | string = today.getDate()
      let mm: number | string = today.getMonth() + 1
      let yyyy = today.getFullYear()

      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm
      let date = dd + '/' + mm + '/' + yyyy

      let game: GamesProps = action.payload
      game.date = date

      state.push(game)
    },
  },
})

export const gamesAction = gamesSlice.actions
export default gamesSlice.reducer
