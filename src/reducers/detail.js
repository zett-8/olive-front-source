import { actionTypes } from '../actions/detail'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL:
      return action.payload

    default:
      return state
  }
}
