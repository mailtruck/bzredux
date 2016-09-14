import axios from 'axios'
import { setMessage } from './messageActions'
import { SET_QUOTE } from './types'
import { ALERT } from '../constants'


export function getQuote(symbol) {
  return dispatch => {
    return axios.get('/api/'+ symbol).then(res=> {
      if (res.data.error){
        dispatch(setMessage({
          type: ALERT,
          text: 'Invalid ticker symbol'
        }))
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
