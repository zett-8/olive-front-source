import { actionTypes } from '../actions/messages'

const INITIAL_STATE = {
  pristine: true,
  contents: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_MESSAGE:
      return INITIAL_STATE

    case actionTypes.GET_MESSAGES:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
