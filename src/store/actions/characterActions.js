import { ERROR, GET_CHARACTERS} from '../types'
import axios from 'axios'

export const getCharacters = (url, params) => dispatch => {
    axios.get(url, {
        params
    })
        .then(res => {
            dispatch({ type: GET_CHARACTERS, payload: res.data })
            
        })
        .catch(err => {
            dispatch({ type: ERROR, paylaod: err })
            
            
        })
}
  