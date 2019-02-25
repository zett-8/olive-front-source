import Api from '../utils/api'

export const actionTypes = {
  GET_WORK_DETAIL: 'GET_WORK_DETAIL',
  TOGGLE_FAVORITE_WORK: 'TOGGLE_FAVORITE_WORK'
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

export const uploadWork = work => () => {
  console.log(work)
  return Api.uploadWork(work)
    .then(() => {
      console.log('uploaded')
    })
    .catch(res => res)
}

export const buyWork = (buyerId, workId) => dispatch => {
  return Api.buyWork(buyerId, workId)
    .then(() => dispatch(getWorkDetail(workId)))
    .catch(res => res)
}

export const toggleFavorite = (workId, userId) => dispatch => {
  return Api.toggleFavorite(workId, userId)
    .then(() => dispatch(getWorkDetail(workId)))
    .catch(res => res)
}
