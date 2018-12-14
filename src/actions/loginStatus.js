import Api from '../utils/api'

export const actionTypes = {
  LOGIN: 'LOGIN',
}

export const login = () => dispatch => {
  return Api.login()
    .then(res => {
      dispatch({
        type: actionTypes.LOGIN,
        payload: res,
      })
    })
    .catch(res => res)
}
