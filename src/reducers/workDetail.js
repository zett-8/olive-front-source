import { actionTypes } from '../actions/workDetail'

const INITIAL_STATE = {
  pristine: true,
  contents: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_WORK_DETAIL:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
