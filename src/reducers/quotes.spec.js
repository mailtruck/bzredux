import quotes from './quotes'
import * as types from '../actions/types'

describe('quotes reducer', () => {
  it('should handle initial state', () => {
    expect(
      quotes(undefined, {})
    ).toEqual({
      symbol: 'AAPL',
      name: 'Apple',
      bidPrice: 108.11,
      askPrice: 108.16
    })
  })

  it('should handle SET_QUOTE', () => {
    const ford = {
      symbol: 'F',
      name: 'Ford Motor',
      bidPrice: 12.50,
      askPrice: 12.75
    }
    const apple = {
      symbol: 'AAPL',
      name: 'Apple',
      bidPrice: 108.11,
      askPrice: 108.16
    }

    expect(
      quotes({}, {
        type: types.SET_QUOTE,
        quote: ford
      })).toEqual(ford)


    expect(
      quotes( apple, {
        type: types.SET_QUOTE,
        quote: ford
      })).toEqual(ford)
  })
})
