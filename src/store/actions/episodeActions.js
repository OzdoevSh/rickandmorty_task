import { ERROR, GET_EPISODES} from '../types'
import axios from 'axios'

export const getEpisodes = () => dispatch => {
    axios.get("https://rickandmortyapi.com/api/episode")
    .then(res => {
        dispatch({type: GET_EPISODES, payload: res.data})
        
    })
    .catch(err => {
        dispatch({type: ERROR, paylaod: err})
    })
}

export const changePageEpisode = (url) => dispatch => {
    axios.get(`${url}`)

    .then(res => {
        dispatch({type: GET_EPISODES, payload: res.data})
        
    })
    .catch(err => {
        dispatch({type: ERROR, paylaod: err})
    })
}

