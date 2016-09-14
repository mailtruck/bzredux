import messages from './messages'
import { SET_MESSAGE, DELETE_MESSAGE, SUCCESS, ALERT } from '../constants'

describe('messages reducer', () => {
  it('should handle initial state', () => {
    expect(
      messages(undefined, {})
    ).toEqual([])
  })

  it('should handle SET_MESSAGE', () => {

    expect(
      messages([], {
        type: SET_MESSAGE,
        message: {
          type: SUCCESS,
          id: 0,
          text: 'you set a message!'
        }
      })).toEqual([{
        type: SUCCESS,
        id: 0,
        text: 'you set a message!'
      }])

      expect(
        messages([
          {
            type: SUCCESS,
            id: 0,
            text: 'you set a message!'
          }
        ], {
          type: SET_MESSAGE,
          message: {
            type: ALERT,
            id: 1,
            text: 'something went wrong'
          }
        })).toEqual([
          {
            type: SUCCESS,
            id: 0,
            text: 'you set a message!'
          },
          {
            type: ALERT,
            id: 1,
            text: 'something went wrong'
          }
      ])

    })

  it('should handle DELETE_MESSAGE', () => {

    expect(
      messages([
        {
          type: SUCCESS,
          id: 0,
          text: 'you set a message!'
        }],
        {
          type: DELETE_MESSAGE,
          id: 0,
        }
    )).toEqual([])

      expect(
        messages([
          {
            type: SUCCESS,
            id: 0,
            text: 'you set a message!'
          },
          {
            type: ALERT,
            id: 1,
            text: 'something went wrong'
          }
        ],
        {
          type: DELETE_MESSAGE,
          id: 1,
        })).toEqual([
          {
            type: SUCCESS,
            id: 0,
            text: 'you set a message!'
          }
      ])




  })

})
