import orderValidator from './orderValidator'
import { BUY, SELL } from '../constants'
import * as types from '../actions/types'

describe('order validaton function checks SEND_ORDER  action against portfolio state for validity - returns SEND_ORDER if valid or SET_MESSAGE if invalid, and returns any non SEND_ORDER action passed to it as-is', () => {
  it('should return a non SEND_ORDER action that it is passed ', () => {
    const portfolio = {
      cash: 100000,
      positions: [{
        name:"Apple",
        symbol:"AAPL",
        purchasePrice:123,
        quantity:100
      }]}
      const action = {
        type: types.SET_QUOTE,
        quote: {
          symbol: 'F',
          name: 'Ford Motor',
          bidPrice: 12.50,
          askPrice: 12.75
        }

      }
    expect(orderValidator(portfolio, action)).toEqual(action)
  })

  it('should return a SEND_ORDER action with order.type === buy if portfolio has enough cash to pay for the order', () => {
    const portfolio = {
      cash: 100000
      }
      const action = {
        type: types.SEND_ORDER,
        order: {
          type: BUY,
          symbol: 'AAPL',
          name: 'Apple',
          bidPrice:100,
          askPrice:110,
          quantity:101
        }
      }
      const action2 = {
        type: types.SEND_ORDER,
        order: {
          type: BUY,
          symbol: 'F',
          name: 'Ford Motor',
          bidPrice:1,
          askPrice:3,
          quantity:11
        }
      }
  })

  it('should return action passed in if portfolio has a position with that symbol with shares >= quantity in the sell order', () => {
    const portfolio = {
      positions: [{
        name:"Apple",
        symbol:"AAPL",
        purchasePrice:123,
        quantity:100
      }]}
      const action = {
        type: types.SEND_ORDER,
        order: {
          type: SELL,
          symbol: 'AAPL',
          name: 'Apple',
          bidPrice:100,
          askPrice:110,
          quantity:100
        }
      }
      const action2 = {
        type: types.SEND_ORDER,
        order: {
          type: SELL,
          symbol: 'AAPL',
          name: 'Apple',
          bidPrice:100,
          askPrice:110,
          quantity:1
        }

      }

    expect(orderValidator(portfolio, action)).toEqual(action)

    expect(orderValidator(portfolio, action2)).toEqual(action2)


  })

  it('should return a SET_MESSAGE action if the cost of the BUY order in SEND_ORDER message exceeds the cash in portfolio', () => {

    const portfolio = {
      cash: 30
      }
    const action = {
      type: types.SEND_ORDER,
      order: {
        type: BUY,
        symbol: 'AAPL',
        name: 'Apple',
        bidPrice:100,
        askPrice:110,
        quantity:101
      }
    }
    const action2 = {
      type: types.SEND_ORDER,
      order: {
        type: BUY,
        symbol: 'F',
        name: 'Ford Motor',
        bidPrice:1,
        askPrice:3,
        quantity:11
      }
    }

    expect(orderValidator(portfolio, action).type).toEqual(types.SET_MESSAGE)

    expect(orderValidator(portfolio, action2).type).toEqual(types.SET_MESSAGE)

  })

  it('should return a SET_MESSAGE action if portfolio does not have enough shares for a SELL order in a SEND_ORDER action ', () => {
    const portfolio = {
      positions: [{
        name:"Apple",
        symbol:"AAPL",
        purchasePrice:123,
        quantity:100
      }]}
    const action = {
      type: types.SEND_ORDER,
      order: {
        type: SELL,
        symbol: 'AAPL',
        name: 'Apple',
        bidPrice:100,
        askPrice:110,
        quantity:101
      }
    }
    const action2 = {
      type: types.SEND_ORDER,
      order: {
        type: SELL,
        symbol: 'F',
        name: 'Ford Motor',
        bidPrice:1,
        askPrice:3,
        quantity:1
      }
    }

    expect(orderValidator(portfolio, action).type).toEqual(types.SET_MESSAGE)

    expect(orderValidator(portfolio, action2).type).toEqual(types.SET_MESSAGE)

  })
})
