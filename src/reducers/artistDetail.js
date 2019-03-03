import { actionTypes } from '../actions/artistDetail'

const INITIAL_STATE = {
  pristine: true,
  contents: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_ARTIST_DETAIL:
      return INITIAL_STATE

    case actionTypes.GET_ARTIST_DETAIL:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
