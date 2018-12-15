import Api from '../utils/api'

export const actionTypes = {
  GET_WORKS: 'GET_WORKS',
}

export const getWorks = () => dispatch => {
  return Api.getWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORKS,
        payload: res.data,
      })
    })
    .catch(res => res)
}
