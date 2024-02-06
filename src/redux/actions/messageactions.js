import axios from 'axios'
import { browserHistory } from 'react-router'

import {
    LOADING_DATA_MESSAGE,
    SET_DATA_MESSAGE,
    SET_ERROR_MESSAGE
} from '../types'

import {abrirmodal} from './modalactions'

export const enviarmensaje = (mensaje) => (dispatch) => {
    dispatch({ type: LOADING_DATA_MESSAGE })
    axios.post('/correo/mensaje/web', mensaje)
        .then((res) => {
            dispatch({
                type: SET_DATA_MESSAGE,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: err.data
            })
        })
}