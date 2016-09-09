import { SET_QUOTE } from '../actions/types'

const initialState = {
  symbol: 'AAPL',
  name: 'Apple',
  bidPrice: 108.11,
  askPrice: 108.16
}


export default function quotes(state = initialState, action) {
  switch (action.type) {
    case SET_QUOTE:
      return action.quote

    default:
      return state
  }
}
