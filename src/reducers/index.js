import { combineReducers } from 'redux'
import portfolio from './portfolio'
import quotes from './quotes'

const rootReducer = combineReducers({
  portfolio,
  quotes
})

export default rootReducer
