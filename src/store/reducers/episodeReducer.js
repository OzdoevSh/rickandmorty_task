import {GET_CHAR_OF_EP, GET_EPISODES} from '../types'

const initialState = {
    episodes:[],
    episodeCharacters: [],
    loading: true,
    info: {}
}

export default function episodeReducer(state = initialState, action){

    switch(action.type){

        case GET_EPISODES:
        return {
            ...state,
            episodes: action.payload.results,
            loading:false,
            info: action.payload.info
        }

        case GET_CHAR_OF_EP:
        return {
            ...state,
            episodeCharacters: action.payload,
            loading:false,

        }
        
        default: return state
    }

    
}