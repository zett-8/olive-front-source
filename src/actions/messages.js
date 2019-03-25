import Api from '../utils/api'

export const actionTypes = {
  CLEAR_MESSAGE: 'CLEAR_MESSAGE',
  GET_MESSAGES: 'GET_MESSAGES',
  SEND_MESSAGE: 'SEND_MESSAGE'
}

export const clearMessage = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_MESSAGE,
    payload: null
  })
}

export const getMessages = workId => dispatch => {
  return Api.getMessages(workId)
    .then(res => {
      dispatch({
        type: actionTypes.GET_MESSAGES,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const sendMessage = (workId, sender, receiver, body) => dispatch => {
  return Api.sendMessage(workId, sender, receiver, body)
    .then(() => dispatch(getMessages(workId)))
    .catch(res => res)
}
