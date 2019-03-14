import Api from '../utils/api'

export const actionTypes = {
  GET_HISTORY: 'GET_HISTORY'
}

export const getHistory = (userId) => dispatch => {
  return Api.getHistory(userId)
    .then(res => {
      dispatch({
        type: actionTypes.GET_HISTORY,
        payload: res.data
      })
    })
    .catch(res => res)
}
