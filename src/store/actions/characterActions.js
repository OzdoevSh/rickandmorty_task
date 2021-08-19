import { ERROR, GET_CHARACTERS, GET_CHAR_OF_EP, GET_CHAR_OF_LOC } from '../types'
import axios from 'axios'

export const getCharacters = ({ gender, name, status }) => dispatch => {
    axios.get("https://rickandmortyapi.com/api/character", {
        params: {
            gender: gender,
            name: name,
            status: status
        }
    })
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_CHARACTERS, payload: res.data })
            
        })
        .catch(err => {
            dispatch({ type: ERROR, paylaod: err })
            
            
        })
}

export const getEpisodeCharacters = (characterUrls) => async (dispatch) => {
    const characters = await Promise.all(characterUrls.map(async (url) => {
        const res = await axios.get(url)
        return res.data
    }))

    dispatch({ type: GET_CHAR_OF_EP, payload: characters })
}
  
export const getLocationCharacters = (characterUrls) => async (dispatch) => {
    const characters = await Promise.all(characterUrls.map(async (url) => {
        const res = await axios.get(url)
        return res.data
    }))

    dispatch({ type: GET_CHAR_OF_LOC, payload: characters })
}
  

 



export const changePageCharacter = (url) => dispatch => {
    axios.get(`${url}`)
        .then(res => {
            dispatch({ type: GET_CHARACTERS, payload: res.data })

        })
        .catch(err => {
            dispatch({ type: ERROR, paylaod: err })
        })
}