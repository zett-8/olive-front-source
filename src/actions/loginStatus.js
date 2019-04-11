import Api from '../utils/api'

export const actionTypes = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD'
}

export const signUp = (email, password, invitationCode) => dispatch => {
  return Api.signUp(email, password, invitationCode)
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

export const updateEmail = (token, userId, email) => dispatch => {
  return Api.updateEmail(token, userId, email)
    .then(() => {
      alert('メールアドレスを変更しました。\n新しいメールアドレスでもう一度ログインしてください')
      dispatch(logout())
    })
    .catch(res => res)
}

export const updatePassword = (token, userId, oldPassword, newPassword) => () => {
  return Api.updatePassword(token, userId, oldPassword, newPassword)
    .then(() => null)
    .catch(res => res)
}
