import { actionTypes } from '../actions/works'

const INITIAL_STATE = {
  pristine: true,
  contents: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_WORKS:
      return INITIAL_STATE

    case actionTypes.GET_WORKS:
      return {
        pristine: false,
        contents: action.payload
      }

    case actionTypes.GET_FILTERED_WORKS:
      return {
        pristine: false,
        contents: action.payload
      }

    case actionTypes.GET_FAVORITE_WORKS:
      return {
        pristine: false,
        contents: action.payload
      }

    case actionTypes.GET_WORKS_OF_AN_ARTIST:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
