import Api from '../utils/api'

export const actionTypes = {
  GET_USER_DETAIL: 'GET_USER_DETAIL',
  UPLOAD_USER_ICON: 'UPLOAD_USER_ICON'
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

export const uploadUserIcon = (id, icon) => dispatch => {
  return Api.uploadUserIcon(id, icon)
    .then(res => {
      dispatch({
        type: actionTypes.UPLOAD_USER_ICON,
        payload: res.data
      })
    })
    .catch(res => res)
}
