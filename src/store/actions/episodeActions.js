import { ERROR, GET_EPISODES } from '../types'
import axios from 'axios'

export const getEpisodes = (url) => dispatch => {
    axios.get(url)
    .then(async (res) => {
        const episodes = [...res.data.results]

        for (let index = 0; index < episodes.length; index++) {
            const element = episodes[index];

            const characters = await Promise.all(element.characters.map(async (url) => {
                const res = await axios.get(url)
                return res.data
            }))

            episodes[index].characters = characters
        }

        dispatch({ type: GET_EPISODES, payload: {
            episodes,
            info: res.data.info
        }})
    })
    .catch((err) => {
        dispatch({ type: ERROR, paylaod: err })
    })
}
