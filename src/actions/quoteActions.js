import axios from 'axios'
import { setMessage } from './messageActions'
import { SET_QUOTE, SET_LOADING , ALERT } from '../constants'


export function getQuote(symbol) {
  return dispatch => {
    dispatch(setLoading(true))
    return axios.get('/api/'+ symbol).then(res=> {
      if (res.data.error){
        dispatch(setLoading(false))
        dispatch(setMessage({
          type: ALERT,
          text: 'Invalid ticker symbol'
        }))
      } else {
        dispatch(setQuote(res.data))
        dispatch(setLoading(false))
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

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading
  }
}
