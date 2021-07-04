import { betAction } from '../slices/betsSlices'

import { AppDispatch, AppThunk } from '../'

interface BetsProps {
  type: string
  description: string
  range: number
  price: number
  'max-number': number
  color: string
  'min-cart-value': number
}

export function fetchBets(): AppThunk {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await fetch('/public/games.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null,
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
