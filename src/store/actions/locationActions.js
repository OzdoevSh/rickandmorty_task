import { ERROR, GET_LOCATIONS} from '../types'
import axios from 'axios'

export const getLocations = (url) => dispatch => {
    axios.get(url)
    .then(async (res) => {
        const locations = [...res.data.results]

        for (let index = 0; index < locations.length; index++) {
            const element = locations[index];

            const residents = await Promise.all(element.residents.map(async (url) => {
                const res = await axios.get(url)
                return res.data
            }))

            locations[index].residents = residents
        }

        dispatch({ type: GET_LOCATIONS, payload: {
            locations,
            info: res.data.info
        }})
    })
    .catch((err) => {
        dispatch({ type: ERROR, paylaod: err })
    })
}

