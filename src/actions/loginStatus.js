import Api from '../utils/api'

export const actionTypes = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const signUp = (email, password) => dispatch => {
  return Api.signUp(email, password)
    .then(res => {
      dispatch({
        type: actionTypes.SIGNUP,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const login = (email, password) => dispatch => {
  return Api.login(email, password)
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
