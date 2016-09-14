import { SET_QUOTE, SET_LOADING } from '../constants'
import { combineReducers } from 'redux'

//   symbol: 'AAPL',
//   name: 'Apple',
//   bidPrice: 108.11,
//   askPrice: 108.16

const quotes = combineReducers({
    quote,
    loading
})

function quote(state = {}, action) {
  switch (action.type) {
    case SET_QUOTE:
      return action.quote

    default:
      return state
  }
}

function loading(state = true, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading
    default:
      return state
  }
}

export default quotes
