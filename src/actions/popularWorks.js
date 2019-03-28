import Api from '../utils/api'
import { clearWorks } from './works'

export const actionTypes = {
  GET_POPULAR_WORKS: 'GET_POPULAR_WORKS'
}

export const getPopularWorks = () => dispatch => {
  dispatch(clearWorks())
  return Api.getWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_POPULAR_WORKS,
        payload: res.data,
      })
    })
    .catch(res => res)
}
