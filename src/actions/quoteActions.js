import axios from 'axios'
import { SET_QUOTE } from './types'

export function getQuote(symbol) {
  return dispatch => {
    return axios.get('/api/'+ symbol).then(res=> {
      if (res.data.error){
        alert()
      } else {
        dispatch(setQuote(res.data))
      }
    })
  }
}

export function setQuote(quote) {
  return {
    type: SET_QUOTE,
    quote
  }
}
