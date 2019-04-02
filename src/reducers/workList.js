import { actionTypes } from '../actions/workList'

const INITIAL_STATE = {
  popularWorks: {
    pristine: true,
    contents: [],
  },
  newWorks: {
    pristine: true,
    contents: [],
  },
  favoriteWorks: {
    pristine: true,
    contents: [],
  },
  artistWorks: {
    pristine: true,
    contents: [],
  },
  filteredWorks: {
    pristine: true,
    contents: [],
  },
  purchasedWorks: {
    pristine: true,
    contents: [],
  },
}

export default (state = INITIAL_STATE, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case actionTypes.GET_NEW_WORKS:
      newState.newWorks = {
        pristine: false,
        contents: action.payload,
      }
      return newState

    case actionTypes.GET_POPULAR_WORKS:
      newState.popularWorks = {
        pristine: false,
        contents: action.payload,
      }
      return newState

    case actionTypes.GET_FAVORITE_WORKS:
      newState.favoriteWorks = {
        pristine: false,
        contents: action.payload
      }
      return newState

    case actionTypes.CLEAR_WORKS_OF_ARTIST:
      newState.artistWorks = {
        pristine: true,
        contents: []
      }
      return newState

    case actionTypes.GET_WORKS_OF_ARTIST:
      newState.artistWorks = {
        pristine: false,
        contents: action.payload
      }
      return newState

    case actionTypes.GET_FILTERED_WORKS:
      newState.filteredWorks = {
        pristine: false,
        contents: action.payload
      }
      return newState

    case actionTypes.GET_PURCHASED_HISTORY:
      newState.purchasedWorks = {
        pristine: false,
        contents: action.payload
      }
      return newState

    default:
      return state
  }
}
