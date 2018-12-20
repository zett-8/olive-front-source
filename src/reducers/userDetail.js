import { actionTypes } from '../actions/userDetail'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_DETAIL:
      return action.payload

    default:
      return state
  }
}
