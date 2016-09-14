import { SET_MESSAGE, DELETE_MESSAGE } from '../constants'
import { v4 } from 'node-uuid'

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    message: {
      ...message,
      id: v4()
    }
  }
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    id
  }
}
