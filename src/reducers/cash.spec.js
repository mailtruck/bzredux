import cash from './cash'
import { SEND_ORDER } from '../constants'

describe('cash reducer', () => {
  it('should handle initial state', () => {
    expect(
      cash(undefined, {})
    ).toEqual(100000)
  })

  it('should handle SEND_ORDER', () => {

    expect(
      cash(100000, {
        type: SEND_ORDER,
        order: {
          type: 'BUY',
          bidPrice:10,
          askPrice:100,
          quantity:10
        }
      })).toEqual(99000)

      expect(
        cash(999, {
          type: SEND_ORDER,
          order: {
            type: 'SELL',
            bidPrice:1,
            askPrice:3,
            quantity:1000
          }
        })).toEqual(1999)

  })
})
