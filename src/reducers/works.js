import { actionTypes } from '../actions/works'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_WORKS:
      return action.payload

    case actionTypes.GET_WORKS_OF_AN_ARTIST:
      return action.payload

    default:
      return state
  }
}
