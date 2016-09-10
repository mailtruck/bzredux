import { SEND_ORDER } from '../actions/types'
import { BUY, SELL } from '../constants'

import averagePurchasePrices from '../utils/averagePurchasePrices.js'
import findIndex from 'lodash/findIndex'


const initialState = [
  {
    name: 'Apple',
    symbol: 'AAPL',
    purchasePrice: 123,
    quantity: 100
  }
]

export default function positions(state = initialState, action) {
  switch (action.type) {
    case SEND_ORDER:
      const { type, symbol, name, askPrice, quantity } = action.order
      const index = findIndex(state, {symbol})
      if (type === BUY){
        if (index === -1) {
          return [
            ...state,
            {
              name,
              symbol,
              purchasePrice: askPrice,
              quantity
            }
          ]
        } else {
          return state.map(p => position(p, action))
        }
      }
      if (type === SELL) {
        return state.map(p => position(p, action))
          .filter(p => p !== false)
      }
    default:
      return state
  }
}

function position(state, action){
  const order = action.order
  if (state.symbol !== order.symbol) {
    return state
  }
  switch (action.type) {
    case SEND_ORDER:
      if (order.type === BUY) {
        return {
          ...state,
          purchasePrice: averagePurchasePrices(state, order),
          quantity: state.quantity + order.quantity,
        }
      }
      if (order.type === SELL) {
        if (state.quantity === order.quantity) {
          return false
        } else {
          return {
            ...state,
            quantity: state.quantity - order.quantity
          }
        }
      }
    default:
      return state
  }
}
