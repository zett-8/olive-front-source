import { actionTypes } from '../actions/artistDetail'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTIST_DETAIL:
      return action.payload

    default:
      return state
  }
}
