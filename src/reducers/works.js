import { actionTypes } from '../actions/works'

const INITIAL_STATE = []

export const workReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_WORKS:
      return state

    default:
      return state
  }
}
