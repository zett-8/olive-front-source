import { actionTypes } from '../actions/history'

const INITIAL_STATE = {
  pristine: true,
  contents: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_HISTORIES:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
