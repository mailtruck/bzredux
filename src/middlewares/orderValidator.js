const orderValidator = store => next => action => {

  let result = next(action)

  return result
}

export default orderValidator
