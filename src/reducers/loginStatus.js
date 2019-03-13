import { actionTypes } from '../actions/loginStatus'
import { actionTypes as actionTypes2 } from '../actions/userDetail'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.payload

    case actionTypes.LOGOUT:
      return {}

    case actionTypes2.UPDATE_BUYER_INFO:
      return {
        token: state.token,
        user_id: state.user_id,
        email: state.email,
        artist: state.artist,
        buyer: true
      }

    case actionTypes2.UPDATE_ARTIST_INFO:
      return {
        token: state.token,
        user_id: state.user_id,
        email: state.email,
        artist: true,
        buyer: state.buyer
      }

    default:
      return state
  }
}
