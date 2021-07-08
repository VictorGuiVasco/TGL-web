import { betAction } from '../slices/betsSlices'

import { AppDispatch, AppThunk } from '../'

export function fetchBets(): AppThunk {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await fetch('games.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
  
      if (!response.ok) {
        throw new Error('Request failed!')
      }
      const data = await response.json()
      return dispatch(betAction.saveBets(data))
    } catch (err) {
      console.log(err)
    }
  }
}
