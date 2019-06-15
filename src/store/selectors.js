import * as R from 'ramda'

export const getLastUserSelector = (state) => {
    return (R.length(state.game.userchoose)>0) ? R.last(state.game.userchoose) : null
}
