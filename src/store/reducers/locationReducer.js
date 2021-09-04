import {GET_LOCATIONS} from '../types'

const initialState = {
    locations:[],
    loading: true,
    info: {}
}

export default function locationReducer(state = initialState, action){

    switch(action.type){

        case GET_LOCATIONS:
        return {
            ...state,
            locations: action.payload.locations,
            loading: false,
            info: action.payload.info

        }

        default: return state

    }

}