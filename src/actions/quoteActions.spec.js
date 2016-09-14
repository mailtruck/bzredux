import { SET_QUOTE } from '../constants'
import { setQuote } from './quoteActions'

describe ('quote actions', () => {
  it('setQuote should create SET_QUOTE action', () => {
    expect(setQuote({
      symbol: "AAPL",
      name: "Apple",
      bidPrice: 105.52,
      askPrice: 105.55
    })).toEqual({
      type: SET_QUOTE,
      quote: {
        symbol: "AAPL",
        name: "Apple",
        bidPrice: 105.52,
        askPrice: 105.55
      }
    })
  })
})
