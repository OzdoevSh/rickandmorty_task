import { ERROR, GET_LOCATIONS} from '../types'
import axios from 'axios'

export const getLocations = () => dispatch => {
    axios.get("https://rickandmortyapi.com/api/location")
    .then(res => {
        dispatch({type: GET_LOCATIONS, payload: res.data})
        
    })
    .catch(err => {
        dispatch({type: ERROR, paylaod: err})
    })
}

export const changePageLocation = (url) => dispatch => {
    axios.get(`${url}`)
    .then(res => {
        dispatch({type: GET_LOCATIONS, payload: res.data})
        
    })
    .catch(err => {
        dispatch({type: ERROR, paylaod: err})
    })
}
