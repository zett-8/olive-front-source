import Api from '../utils/api'

export const actionTypes = {
  CLEAR_WORK_DETAIL: 'CLEAR_WORK_DETAIL',
  GET_WORK_DETAIL: 'GET_WORK_DETAIL',
  TOGGLE_FAVORITE_WORK: 'TOGGLE_FAVORITE_WORK',
}

export const clearWorkDetail = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_WORK_DETAIL,
    payload: null,
  })
}

export const getWorkDetail = id => dispatch => {
  return Api.getWorkDetail(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORK_DETAIL,
        payload: res.data,
      })
    })
    .catch(res => res)
}

export const uploadWork = work => () => {
  return Api.uploadWork(work)
    .then(() => {
      console.log('uploaded')
    })
    .catch(res => res)
}

export const updateWork = (id, work) => dispatch => {
  return Api.updateWork(id, work)
    .then(() => {
      dispatch(getWorkDetail(id))
    })
    .catch(res => res)
}

export const changeWorkStatus = (workId, status) => dispatch => {
  return Api.changeWorkStatus(workId, status)
    .then(() => {
      dispatch(getWorkDetail(workId))
    })
    .catch(res => res)
}

export const purchaseWork = (description, token, price, receipt) => () => {
  return Api.purchaseWork(description, token, price, receipt)
    .then(() => {
      console.log('bought')
    })
    .catch(res => res)
}

export const workWasBought = (buyerUUID, workId, status) => dispatch => {
  return Api.workWasBought(buyerUUID, workId, status)
    .then(() => {
      dispatch(getWorkDetail(workId))
    })
    .catch(res => res)
}

export const toggleFavorite = (workId, userId) => dispatch => {
  return Api.toggleFavorite(workId, userId)
    .then(() => {
      dispatch(getWorkDetail(workId))
    })
    .catch(res => res)
}
