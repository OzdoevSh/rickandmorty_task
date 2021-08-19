import { GET_CHARACTERS, ERROR} from '../types'

const initialState = {
    characters:[],
    error: "",
    loading: true,
    info: {}
}

export default function characterReducer(state = initialState, action){

    switch(action.type){

        case GET_CHARACTERS:
        return {
            ...state,
            characters: action.payload.results,
            info: action.payload.info,
            loading: false
        }
        case ERROR:
        return{
            ...state,
            characters: [],
            loading: false
        }
        default: return state
    }

}