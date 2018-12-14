import { actionTypes } from '../actions/loginStatus'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.payload

    default:
      return state
  }
}
