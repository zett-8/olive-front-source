import Api from '../utils/api'

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const login = (username, password) => dispatch => {
  return Api.login(username, password)
    .then(res => {
      dispatch({
        type: actionTypes.LOGIN,
        payload: res.data,
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
