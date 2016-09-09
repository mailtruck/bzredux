import { SET_MESSAGE, DELETE_MESSAGE } from './types'

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    message
  }
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    id
  }
}
