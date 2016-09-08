import { combineReducers } from 'redux'
import positions from './positions'
import quotes from './quotes'

const rootReducer = combineReducers({
  positions,
  quotes
})

export default rootReducer
