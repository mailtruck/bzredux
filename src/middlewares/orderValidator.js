import * as utils from '../utils/orderValidator'

const orderValidator = store => next => action => {
  const portfolio = store.getState().portfolio
  console.log(portfolio)
  return next(utils.orderValidator(portfolio, action))
}


export default orderValidator
