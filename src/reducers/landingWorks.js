import { actionTypes } from '../actions/landingWorks'

const INITIAL_STATE = {
  newWorks: {
    pristine: true,
    contents: [],
  },
  popularWorks: {
    pristine: true,
    contents: [],
  }
}

export default (state = INITIAL_STATE, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case actionTypes.GET_NEW_WORKS_FOR_LANDING:
      newState.newWorks = {
        pristine: false,
        contents: action.payload.results,
      }
      return newState

    case actionTypes.GET_POPULAR_WORKS_FOR_LANDING:
      newState.popularWorks = {
        pristine: false,
        contents: action.payload.results,
      }
      return newState

    default:
      return newState
  }
}
