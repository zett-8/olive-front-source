import Api from '../utils/api'

export const actionTypes = {
  GET_NEW_WORKS_FOR_LANDING: 'GET_NEW_WORKS_FOR_LANDING',
  GET_POPULAR_WORKS_FOR_LANDING: 'GET_POPULAR_WORKS_FOR_LANDING',
}

export const getPopularWorksForLanding = () => dispatch => {
  return Api.getPopularWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_POPULAR_WORKS_FOR_LANDING,
        payload: res.data,
      })
    })
    .catch(res => res)
}

export const getNewWorksForLanding = () => dispatch => {
  return Api.getNewWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEW_WORKS_FOR_LANDING,
        payload: res.data,
      })
    })
    .catch(res => res)
}
