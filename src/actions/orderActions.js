import { SEND_ORDER } from './types'

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

export function sendOrder(order) {
  return {
    type: SEND_ORDER,
    order
  }
}
