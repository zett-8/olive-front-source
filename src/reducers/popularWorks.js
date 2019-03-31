import { actionTypes } from '../actions/popularWorks'

const INITIAL_STATE = {
  pristine: true,
  contents: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_WORKS:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}