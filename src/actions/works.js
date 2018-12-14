import Api from '../utils/api'

export const actionTypes = {
  GET_WORKS: 'GET_WORKS',
}

export const getWorks = () => dispatch => {
  return Api.login()
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORKS,
        payload: res,
      })
    })
    .catch(res => res)
}
