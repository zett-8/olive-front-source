import { actionTypes } from '../actions/messages'

const INITIAL_STATE = {
  pristine: true,
  contents: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_MESSAGES:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
