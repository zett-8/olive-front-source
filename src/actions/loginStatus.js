import Api from '../utils/api'

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
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

export const logout = () => dispatch => {
  dispatch({
    type: actionTypes.LOGOUT,
    payload: null,
  })
}
