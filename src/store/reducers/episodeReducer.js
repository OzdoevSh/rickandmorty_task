import {GET_EPISODES} from '../types'

const initialState = {
    episodes:[],
    loading: true,
    info: {}
}

export default function episodeReducer(state = initialState, action){

    switch(action.type){

        case GET_EPISODES:
        return {
            ...state,
            episodes: action.payload.episodes,
            loading:false,
            info: action.payload.info
        }

        default: return state
    }

    
}