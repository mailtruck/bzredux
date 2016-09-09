import positions from './positions'
import * as types from '../actions/types'
import { BUY, SELL } from '../constants'

describe('positions reducer', () => {
  it('should handle initial state', () => {
    expect(
      positions(undefined, {})
    ).toEqual([{
      name: 'Apple',
      symbol: 'AAPL',
      purchasePrice: 123,
      quantity: 100
    }])
  })

  it('should handle SEND_ORDER: remove position from positions if all shares are sold', () => {

    expect(
      positions([
        {
          name: 'Apple',
          symbol: 'AAPL',
          purchasePrice: 123,
          quantity: 100
        }],
        {
          type: types.SEND_ORDER,
          order: {
            type: SELL,
            symbol: 'AAPL',
            name: 'Apple',
            bidPrice:100,
            askPrice:110,
            quantity:100
          }
      })).toEqual([])

    expect(
      positions([
        {
          name: 'Apple',
          symbol: 'AAPL',
          purchasePrice: 123,
          quantity: 50
        },
        {
          name: 'Ford Motor',
          symbol: 'F',
          purchasePrice: 3,
          quantity: 100
        }],
        {
          type: types.SEND_ORDER,
          order: {
            type: SELL,
            symbol: 'F',
            name: 'Ford Motor',
            bidPrice:1,
            askPrice:3,
            quantity:100
          }
      })).toEqual([
        {
          name: 'Apple',
          symbol: 'AAPL',
          purchasePrice: 123,
          quantity: 50
        }
      ])
  })

    it('should handle SEND_ORDER:  sell some shares of owned stock', () => {

      expect(
        positions([
          {
            name: 'Apple',
            symbol: 'AAPL',
            purchasePrice: 123,
            quantity: 100
          }],
          {
            type: types.SEND_ORDER,
            order: {
              type: SELL,
              symbol: 'AAPL',
              name: 'Apple',
              bidPrice:100,
              askPrice:110,
              quantity:50
            }
        })).toEqual([{
          name: 'Apple',
          symbol: 'AAPL',
          purchasePrice: 123,
          quantity: 50
        }])
      })

  it('should handle SEND_ORDER: add more shares to position if BUY and already owned. purchasePrice should be average of old and new price', () => {
      expect(
        positions([
          {
            name: 'Apple',
            symbol: 'AAPL',
            purchasePrice: 123,
            quantity: 100
          }],
          {
            type: types.SEND_ORDER,
            order: {
              type: BUY,
              symbol: 'AAPL',
              name: 'Apple',
              bidPrice:100,
              askPrice:110,
              quantity:100
            }
        })).toEqual([{
          name: 'Apple',
          symbol: 'AAPL',
          purchasePrice: 116.5,
          quantity: 200
        }])
  })

  it('should handle SEND_ORDER: add a position to positions if 0 shares already owned', () => {

      expect(
        positions([
          {
            name: 'Apple',
            symbol: 'AAPL',
            purchasePrice: 123,
            quantity: 100
          }],
          {
            type: types.SEND_ORDER,
            order: {
              type: BUY,
              symbol: 'F',
              name: 'Ford Motor',
              bidPrice:1,
              askPrice:3,
              quantity:100
            }
        })).toEqual([
          {
            name: 'Apple',
            symbol: 'AAPL',
            purchasePrice: 123,
            quantity: 100
          },
          {
            name: 'Ford Motor',
            symbol: 'F',
            purchasePrice: 3,
            quantity: 100
          }
        ])

      expect(
        positions([],
          {
            type: types.SEND_ORDER,
            order: {
              type: BUY,
              symbol: 'F',
              name: 'Ford Motor',
              bidPrice:1,
              askPrice:3,
              quantity:100
            }
        })).toEqual([
          {
            name: 'Ford Motor',
            symbol: 'F',
            purchasePrice: 3,
            quantity: 100
          }
        ])

  })
})
