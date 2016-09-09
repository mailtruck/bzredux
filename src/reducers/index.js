import { combineReducers } from 'redux'
import portfolio from './portfolio'
import quotes from './quotes'
import messages from './messages'

const rootReducer = combineReducers({
  portfolio,
  quotes,
  messages
})

export default rootReducer
