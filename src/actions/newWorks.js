import Api from '../utils/api'
import { clearWorks } from './works'

export const actionTypes = {
  GET_NEW_WORKS: 'GET_NEW_WORKS'
}

export const getNewWorks = () => dispatch => {
  dispatch(clearWorks())
  return Api.getWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEW_WORKS,
        payload: res.data,
      })
    })
    .catch(res => res)
}
