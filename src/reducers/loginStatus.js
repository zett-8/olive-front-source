import { actionTypes } from '../actions/loginStatus'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_STATUS:
      return state

    default:
      return state
  }
}
