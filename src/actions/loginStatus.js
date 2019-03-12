import Api from '../utils/api'

export const actionTypes = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD'
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

export const updateEmail = (userId, email) => dispatch => {
  return Api.updateEmail(userId, email)
    .then(() => {
      alert('メールアドレスを変更しました。\n新しいメールアドレスでもう一度ログインしてください')
      dispatch(logout())
    })
    .catch(res => res)
}

export const updatePassword = (userId, oldPassword, newPassword) => () => {
  return Api.updatePassword(userId, oldPassword, newPassword)
    .then(() => console.log('password is updated'))
    .catch(res => res)
}
