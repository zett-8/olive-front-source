import { actionTypes } from '../actions/messages'

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_MESSAGES:
      return action.payload

    default:
      return state
  }
}
