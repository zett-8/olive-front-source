import { actionTypes } from '../actions/works'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_WORKS:
      return action.payload

    default:
      return state
  }
}
