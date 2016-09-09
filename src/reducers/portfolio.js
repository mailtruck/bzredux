import { combineReducers } from 'redux'
import positions from './positions'
import cash from './cash'

const portfolio = combineReducers({
  cash,
  positions
})

export default portfolio
