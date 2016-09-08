import axios from 'axios'

export function getQuote(symbol){
  return dispatch => {
    return axios.get('/api/'+ symbol).then(res=> {
      console.log(res)
    })
  }
}
