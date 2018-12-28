import Api from '../utils/api'

export const actionTypes = {
  GET_MESSAGES: 'GET_MESSAGES'
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
