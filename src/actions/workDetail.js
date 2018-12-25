import Api from '../utils/api'

export const actionTypes = {
  GET_WORK_DETAIL: 'GET_WORK_DETAIL'
}

export const getWorkDetail = (id) => dispatch => {
  return Api.getWorkDetail(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORK_DETAIL,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const buyWork = (buyerId, workId) => dispatch => {
  return Api.buyWork(buyerId, workId)
    .then(() => dispatch(getWorkDetail(buyerId)))
    .catch(res => res)
}
