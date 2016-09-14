import { setMessage } from './messageActions'
import { SEND_ORDER, ALERT } from '../constants'
import orderValidator from '../utils/orderValidator'

/*
  order: {
    type
    symbol,
    name,
    bidPrice,
    askPrice,
    quantity
  }
*/

export function requestOrder(portfolio, order){
  const { error, isValid } = orderValidator(portfolio, order)
  return dispatch => {
    if (isValid) {
      dispatch(sendOrder(order))
    } else {
      dispatch(setMessage({
        type: ALERT,
        text: error
      }))
    }
  }
}

export function sendOrder(order) {
  return {
    type: SEND_ORDER,
    order
  }
}
