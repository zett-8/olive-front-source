import { actionTypes } from '../actions/buyerDetail'

const INITIAL_STATE = {
  pristine: true,
  contents: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_BUYER_INFO:
      return {
        pristine: false,
        contents: action.payload
      }

    default:
      return state
  }
}
