import { actionTypes } from '../actions/filters'

const INITIAL_STATE = {
  pristine: true,
  contents: {
    genres: [],
    colors: [],
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_COLORS:
      return {
        contents: {
          colors: action.payload,
          genres: state.contents.genres,
        },
        pristine: !state.contents.genres.length,
      }

    case actionTypes.GET_GENRES:
      return {
        contents: {
          colors: state.contents.colors,
          genres: action.payload,
        },
        pristine: !state.contents.colors.length,
      }

    default:
      return state
  }
}
