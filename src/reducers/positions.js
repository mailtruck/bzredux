import { SEND_ORDER } from '../actions/types'
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
      const { type, symbol, name, bidPrice, askPrice, quantity } = action.order
      const index = findIndex(state, {symbol})
      console.log('index', index)

      if (type === 'BUY'){
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
          return [
            ...state.slice(0, index),
            position(state[index], action),
            ...state.slice(index+1)
          ]
        }
      }
      if (type === 'SELL') {
        return [
          ...state.slice(0, index),
          position(state[index], action),
          ...state.slice(index+1)
        ].filter(p => p !== false)
      }
    default:
      return state
  }
}

function position(state, action){
  const order = action.order
  switch (action.type) {
    case SEND_ORDER:
      if (order.type === 'BUY') {
        return {
          name: state.name,
          symbol: state.symbol,
          purchasePrice: averagePurchasePrices(state, order),
          quantity: state.quantity + order.quantity,
        }
      }
      if (order.type === 'SELL') {
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


// function buy(state, action) {
//   const index = findIndex()
//   switch (action.type) {
//     case SEND_ORDER:
//
//       return state
//     default:
//       return state
//   }
// }
//
// function sell(state, action) {
//   switch (action.type) {
//     case SEND_ORDER:
//       return state
//     default:
//       return state
//   }
// }
