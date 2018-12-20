import Api from '../utils/api'

export const actionTypes = {
  GET_USER_DETAIL: 'GET_USER_DETAIL'
}

export const getUserDetail = id => dispatch => {
  return Api.getUserDetail(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_USER_DETAIL,
        payload: res.data
      })
    })
    .catch(res => res)
}
