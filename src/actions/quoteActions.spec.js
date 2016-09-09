import * as types from './types'
import * as actions from './quoteActions'

describe ('quote actions', () => {
  it('setQuote should create SET_QUOTE action', () => {
    expect(actions.setQuote({
      symbol: "AAPL",
      name: "Apple",
      bidPrice: 105.52,
      askPrice: 105.55
    })).toEqual({
      type: types.SET_QUOTE,
      quote: {
        symbol: "AAPL",
        name: "Apple",
        bidPrice: 105.52,
        askPrice: 105.55
      }
    })
  })
})
