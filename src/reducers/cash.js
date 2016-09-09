import { SEND_ORDER } from '../actions/types'

export default function cash(state = 100000, action) {
  switch (action.type) {
    case SEND_ORDER:
      const { type, bidPrice, askPrice, quantity } = action.order
      if (type === 'BUY') {
        return state - askPrice * quantity
      }
      if (type === 'SELL') {
        return state + bidPrice * quantity
      }
    default:
      return state
  }
}
