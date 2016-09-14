import { BUY, SELL, ALERT } from '../constants'
import findIndex from 'lodash/findIndex'


function orderValidator(portfolio, order){
  const { symbol, askPrice, quantity } = order
  const valid = {
    error: '',
    isValid: true
  }
  switch (order.type) {
    case BUY:
      if (portfolio.cash < askPrice * quantity) {
        return {
            error: 'You do not have enough cash for that order',
            isValid: false
          }
      } else {
        return valid
      }
    case SELL:
      const index = findIndex(portfolio.positions, {symbol})

      if (index === -1 || portfolio.positions[index].quantity < quantity) {
        return {
            error: `You do not own enough shares of ${symbol} for that order`,
            isValid: false
          }
      } else {
        return valid
      }
    default:
      return valid
  }
}

export default orderValidator
