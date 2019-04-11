import Api from '../utils/api'

export const actionTypes = {
  GET_USER_DETAIL: 'GET_USER_DETAIL',
  UPLOAD_USER_ICON: 'UPLOAD_USER_ICON',
  UPDATE_BUYER_INFO: 'UPDATE_BUYER_INFO',
  UPDATE_ARTIST_INFO: 'UPDATE_ARTIST_INFO'
}

export const getUserDetail = (token, UUID) => dispatch => {
  return Api.getUserDetail(token, UUID)
    .then(res => {
      dispatch({
        type: actionTypes.GET_USER_DETAIL,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const uploadUserIcon = (token, id, icon) => dispatch => {
  return Api.uploadUserIcon(token, id, icon)
    .then(() => {
      dispatch(getUserDetail(token, id))
    })
    .catch(res => res)
}

export const updateBuyerInfo = (token, userId, data) => dispatch => {
  return Api.updateBuyerInfo(token, userId, data)
    .then(() => {
      dispatch(getUserDetail(token, userId))
      dispatch({
        type: actionTypes.UPDATE_BUYER_INFO,
        payload: null
      })
    })
    .catch(res => res)
}

export const updateArtistInfo = (token, userId, data) => dispatch => {
  return Api.updateArtistInfo(token, userId, data)
    .then(() => {
      dispatch(getUserDetail(token, userId))
      dispatch({
        type: actionTypes.UPDATE_ARTIST_INFO,
        payload: null
      })
    })
    .catch(res => res)
}
