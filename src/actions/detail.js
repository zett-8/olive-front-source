import Api from '../utils/api'

export const actionTypes = {
  GET_DETAIL: 'GET_DETAIL'
}

export const getDetail = (id) => dispatch => {
  return Api.getDetail(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_DETAIL,
        payload: res.data
      })
    })
    .catch(res => res)
}
