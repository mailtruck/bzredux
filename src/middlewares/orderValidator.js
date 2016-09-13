import * as utils from '../utils/orderValidator'

const orderValidator = store => next => action => {
  const portfolio = store.getState().portfolio
  return next(utils.orderValidator(portfolio, action))
}


export default orderValidator
