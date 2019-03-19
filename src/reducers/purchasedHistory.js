import { actionTypes } from '../actions/purchasedHistory'

const INITIAL_STATE = {
  pristine: true,
  contents: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PURCHASED_HISTORY:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
