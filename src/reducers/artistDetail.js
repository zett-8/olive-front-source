import { actionTypes } from '../actions/artistDetail'

const INITIAL_STATE = {
  pristine: true,
  contents: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTIST_DETAIL:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
