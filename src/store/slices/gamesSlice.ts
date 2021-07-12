import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GamesProps {
  type: string
  numbers: string
  price: string
  color: string
  date?: string
}

const initialState: Array<GamesProps> = []

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGames(state, action: PayloadAction<GamesProps[]>) {
      for(let value of action.payload){
        let today = new Date()
        let dd: number | string = today.getDate()
        let mm: number | string = today.getMonth() + 1
        let yyyy = today.getFullYear()
  
        if (dd < 10) dd = '0' + dd
        if (mm < 10) mm = '0' + mm
        let date = dd + '/' + mm + '/' + yyyy
  
        let game: GamesProps = value
        game.date = date
  
        state.push(game)
        console.log(game)
      }
    },
  },
})

export const gamesActions = gamesSlice.actions
export default gamesSlice.reducer
