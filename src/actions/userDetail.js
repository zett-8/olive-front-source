import Api from '../utils/api'

export const actionTypes = {
  GET_USER_DETAIL: 'GET_USER_DETAIL',
  UPLOAD_USER_ICON: 'UPLOAD_USER_ICON',
  UPDATE_BUYER_INFO: 'UPDATE_BUYER_INFO',
  UPDATE_ARTIST_INFO: 'UPDATE_ARTIST_INFO'
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
    .then(() => dispatch(getUserDetail(id)))
    .catch(res => res)
}

export const updateBuyerInfo = (userId, data) => dispatch => {
  return Api.updateBuyerInfo(userId, data)
    .then(() => {
      dispatch(getUserDetail(userId))
      dispatch({
        type: actionTypes.UPDATE_BUYER_INFO,
        payload: null
      })
    })
    .catch(res => res)
}

export const updateArtistInfo = (userId, data) => dispatch => {
  return Api.updateArtistInfo(userId, data)
    .then(() => {
      dispatch(getUserDetail(userId))
      dispatch({
        type: actionTypes.UPDATE_ARTIST_INFO,
        payload: null
      })
    })
    .catch(res => res)
}
