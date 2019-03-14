import { actionTypes } from '../actions/genres'

const INITIAL_STATE = {
  pristine: true,
  contents: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_GENRES:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
