import {
    LOADING_DATA_MESSAGE,
    SET_DATA_MESSAGE,
    SET_ERROR_MESSAGE
} from '../types'

const initialState = {
    loading: false,
    message: '',
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA_MESSAGE:
            return {
                ...state,
                loading: true
            }
        case SET_DATA_MESSAGE:
            return {
                loading: false,
                ...action.payload
            }
        case SET_ERROR_MESSAGE:
            return {
                loading: false,
                ...action.payload
            }
        default: return state
    }
}