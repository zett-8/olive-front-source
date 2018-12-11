export const actionTypes = {
  GET_WORKS: 'GET_WORKS'
}

export const getWorks = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_WORKS,
    payload: []
  })
}
