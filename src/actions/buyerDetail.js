import Api from '../utils/api'

export const actionTypes = {
  GET_BUYER_INFO: 'GET_BUYER_INFO'
}

export const getBuyerInfo = id => dispatch => {
  return Api.getBuyerInfo(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_BUYER_INFO,
        payload: res.data
      })
    })
    .catch(res => res)
}
