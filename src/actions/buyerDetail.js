import Api from '../utils/api'

export const actionTypes = {
  GET_BUYER_INFO: 'GET_BUYER_INFO'
}

export const getBuyerInfo = (token, BuyerId) => dispatch => {
  return Api.getBuyerInfo(token, BuyerId)
    .then(res => {
      dispatch({
        type: actionTypes.GET_BUYER_INFO,
        payload: res.data
      })
    })
    .catch(res => res)
}
