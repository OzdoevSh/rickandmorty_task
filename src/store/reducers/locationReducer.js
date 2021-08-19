import {GET_LOCATIONS, GET_CHAR_OF_LOC} from '../types'

const initialState = {
    locations:[],
    locationCharacters: [],
    error: "",
    loading: true,
    info: {}
}

export default function locationReducer(state = initialState, action){

    switch(action.type){

        case GET_LOCATIONS:
        return {
            ...state,
            locations: action.payload.results,
            info: action.payload.info,
            loading: false
        }

        case GET_CHAR_OF_LOC:
            return {
                ...state,
                locationCharacters: action.payload,
                loading: false
            }
        default: return state
    }

}