import { SET_MESSAGE, DELETE_MESSAGE } from '../constants'
import findIndex from 'lodash/findIndex'



export default function messages(state = [], action) {
  switch (action.type) {
    case SET_MESSAGE:
      const textAt = findIndex(state, {text: action.message.text})
      if (textAt === -1 ) {
        return [
          ...state,
          {
            ...action.message
          }
        ]
      } else {
        return state
      }
    case DELETE_MESSAGE:
      const idAt = findIndex(state, {id: action.id})
      return [
        ...state.slice(0, idAt),
        ...state.slice(idAt +1)
      ]

    default:
      return state
  }
}
