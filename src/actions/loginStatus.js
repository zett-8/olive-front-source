export const actionTypes = {
  SET_STATUS: 'SET_STATUS',
}

export const setStatus = () => dispatch => {
  dispatch({
    type: actionTypes.SET_STATUS,
    payload: [],
  })
}
