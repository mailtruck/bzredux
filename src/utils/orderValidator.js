import { SEND_ORDER } from '../actions/types'
import { BUY, SELL } from '../constants'

export default function orderValidator(state, action){
  if (action.type !== SEND_ORDER) {
    return action
  }

  switch (action.order.type) {
    case BUY:
      return action
    case SELL:
      return action
    default:
      return action
  }

}
