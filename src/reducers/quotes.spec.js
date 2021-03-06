import quotes from './quotes'
import { SET_QUOTE, SET_LOADING } from '../constants'

describe('quotes reducer', () => {
  it('should handle initial state', () => {
    expect(
      quotes(undefined, {})
    ).toEqual({quote: {}, loading: true})
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
      quotes({quote:{}, loading: true}, {
        type: SET_QUOTE,
        quote: ford
      }).quote).toEqual(ford)


    expect(
      quotes({quote:apple, loading: false}, {
        type: SET_QUOTE,
        quote: ford
      }).quote).toEqual(ford)
  })

  it('should handle SET_LOADING', () => {
    expect(
      quotes({quote:{}, loading: true}, {
        type: SET_LOADING,
        loading: false
      }).loading).toEqual(false)
  })
})
