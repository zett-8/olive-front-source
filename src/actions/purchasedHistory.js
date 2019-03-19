import Api from '../utils/api'

export const actionTypes = {
  GET_PURCHASED_HISTORY: 'GET_PURCHASED_HISTORY'
}

export const getPurchasedHistory = (userId) => dispatch => {
  return Api.getPurchasedHistory(userId)
    .then(res => {
      dispatch({
        type: actionTypes.GET_PURCHASED_HISTORY,
        payload: res.data
      })
    })
    .catch(res => res)
}
