import * as types from '../actions/types'
import findIndex from 'lodash/findIndex'


export default function messages(state = [], action) {
  switch (action.type) {
    case types.SET_MESSAGE:
      return [
        ...state,
        {
          type: action.message.type,
          id: action.message.id,
          text: action.message.text
        }
      ]
    case types.DELETE_MESSAGE:
      const index = findIndex(state, {id: action.id})
      return [
        ...state.slice(0, index),
        ...state.slice(index +1)
      ]

    default:
      return state
  }
}
