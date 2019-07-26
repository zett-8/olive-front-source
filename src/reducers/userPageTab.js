import { actionTypes } from '../actions/userPageTab'

const INITIAL_STATE = {
  num: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_TAB:
      return { num: action.payload }

    default:
      return state
  }
}
