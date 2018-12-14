import { actionTypes } from '../actions/loginStatus'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.payload

    case actionTypes.LOGOUT:
      return {}

    default:
      return state
  }
}
