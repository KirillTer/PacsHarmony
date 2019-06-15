import * as R from 'ramda'
import {USER_CHOOSE, COMP_CHOOSE, SAVE_WIN} from '../actions/actionTypes'

const initialState = {
    userchoose: [],
    compchoose: [],
    win: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_CHOOSE:
            console.log('USER_CHOOSE', payload)
            return R.merge(state, {
                userchoose: R.concat(state.userchoose, [payload])
            })
        case COMP_CHOOSE:
            console.log('COMP_CHOOSE', payload)
            return R.merge(state, {
                compchoose: R.concat(state.compchoose, [payload])
            })
        case SAVE_WIN:
            console.log('SAVE_WIN', payload)
            return R.merge(state, {
                win: R.concat(state.win, [payload])
            })
        default: return state
    }
}