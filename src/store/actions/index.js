import {USER_CHOOSE, COMP_CHOOSE, SAVE_WIN} from './actionTypes'

export const saveUserAction = user => dispatch => {
    dispatch({type: USER_CHOOSE, payload: user})
}

export const saveCompAction = comp => dispatch => {
    dispatch({type: COMP_CHOOSE, payload: comp})
}

export const saveWinAction = win => dispatch => {
    dispatch({type: SAVE_WIN, payload: win})
}