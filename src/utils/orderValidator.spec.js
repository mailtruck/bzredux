import orderValidator from './orderValidator'
import { BUY, SELL } from '../constants'

describe('order validaton function checks order against portfolio for validity. if valid, returns object with isValid: true, error: "" if invalid, returns isValid: false and error as a string describing why it is invalid', () => {

  it('should return object with .isValid === true with no error if cash in portfolio > order quantity * askPrice', () => {
    const portfolio = {
      cash: 100000
      }
      const order = {
        type: BUY,
        symbol: 'AAPL',
        name: 'Apple',
        bidPrice:100,
        askPrice:110,
        quantity:101
      }
      const order2 = {
        type: BUY,
        symbol: 'F',
        name: 'Ford Motor',
        bidPrice:1,
        askPrice:3,
        quantity:11
      }

      expect(orderValidator(portfolio, order).isValid).toEqual(true)
      expect(orderValidator(portfolio, order).error).toEqual('')

      expect(orderValidator(portfolio, order2).isValid).toEqual(true)
      expect(orderValidator(portfolio, order2).error).toEqual('')

  })

  it('should return isValid === true with no error if portfolio contains enough correct shares for sell order', () => {
    const portfolio = {
      positions: [{
        name:"Apple",
        symbol:"AAPL",
        purchasePrice:123,
        quantity:100
      }]}
      const order = {
        type: SELL,
        symbol: 'AAPL',
        name: 'Apple',
        bidPrice:100,
        askPrice:110,
        quantity:100
      }
      const order2 = {
        type: SELL,
        symbol: 'AAPL',
        name: 'Apple',
        bidPrice:100,
        askPrice:110,
        quantity:1
      }


      expect(orderValidator(portfolio, order).isValid).toEqual(true)
      expect(orderValidator(portfolio, order).error).toEqual('')

      expect(orderValidator(portfolio, order2).isValid).toEqual(true)
      expect(orderValidator(portfolio, order2).error).toEqual('')




  })

  it('should return an error and isValid === false if the cost of the BUY order in SEND_ORDER message exceeds the cash in portfolio', () => {

    const portfolio = {
      cash: 30
      }
    const order = {
      type: BUY,
      symbol: 'AAPL',
      name: 'Apple',
      bidPrice:100,
      askPrice:110,
      quantity:101
    }
    const order2 = {
      type: BUY,
      symbol: 'F',
      name: 'Ford Motor',
      bidPrice:1,
      askPrice:3,
      quantity:11
    }

    expect(orderValidator(portfolio, order).isValid).toEqual(false)
    expect(orderValidator(portfolio, order).error.length > 0).toEqual(true)

    expect(orderValidator(portfolio, order2).isValid).toEqual(false)
    expect(orderValidator(portfolio, order2).error.length > 0).toEqual(true)


  })

  it('should return an error and isValid === false if portfolio does not have enough shares for SELL order ', () => {
    const portfolio = {
      positions: [{
        name:"Apple",
        symbol:"AAPL",
        purchasePrice:123,
        quantity:100
      }]}
    const order = {
      type: SELL,
      symbol: 'AAPL',
      name: 'Apple',
      bidPrice:100,
      askPrice:110,
      quantity:101
    }
    const order2 = {
      type: SELL,
      symbol: 'F',
      name: 'Ford Motor',
      bidPrice:1,
      askPrice:3,
      quantity:1
    }

    expect(orderValidator(portfolio, order).isValid).toEqual(false)
    expect(orderValidator(portfolio, order).error.length > 0).toEqual(true)

    expect(orderValidator(portfolio, order2).isValid).toEqual(false)
    expect(orderValidator(portfolio, order2).error.length > 0).toEqual(true)


  })
})
