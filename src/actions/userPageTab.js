export const actionTypes = {
  CHANGE_USER_TAB: 'CHANGE_USER_TAB'
}

export const changeUserTab = num => dispatch => {
  dispatch({
    type: actionTypes.CHANGE_USER_TAB,
    payload: num
  })
}
