import { actionTypes } from '../actions/workDetail'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_WORK_DETAIL:
      return action.payload

    default:
      return state
  }
}
