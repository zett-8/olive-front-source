import { actionTypes } from '../actions/seedArtists'

const INITIAL_STATE = {
  pristine: true,
  contents: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEED_ARTISTS:
      return {
        pristine: false,
        contents: action.payload,
      }

    default:
      return state
  }
}
