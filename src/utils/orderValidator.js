import * as types from '../actions/types'
import { BUY, SELL, ALERT } from '../constants'
import findIndex from 'lodash/findIndex'
import { v4 } from 'node-uuid'

export default function orderValidator(portfolio, action){
  if (action.type !== types.SEND_ORDER) {
    return action
  }
  const { symbol, askPrice, quantity } = action.order

  switch (action.order.type) {
    case BUY:
      if (portfolio.cash < askPrice * quantity) {
        return {
          type: types.SET_MESSAGE,
          message: {
            type: ALERT,
            id: v4(),
            text: 'You do not have enough cash for that order'
          }
        }
      } else {
        return action
      }
    case SELL:
      const index = findIndex(portfolio.positions, {symbol})

      if (index === -1 || portfolio.positions[index].quantity < quantity) {
        return {
          type: types.SET_MESSAGE,
          message: {
            type: ALERT,
            id: v4(),
            text: `You do not own enough shares of ${symbol} for that order`
          }
        }
      } else {
        return action
      }
    default:
      return action
  }

}
