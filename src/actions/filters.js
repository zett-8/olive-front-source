import Api from '../utils/api'

export const actionTypes = {
  GET_COLORS: 'GET_COLORS',
  GET_GENRES: 'GET_GENRES'
}

export const getColors = () => dispatch => {
  return Api.getColors()
    .then(res => {
      dispatch({
        type: actionTypes.GET_COLORS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getGenres = () => dispatch => {
  return Api.getGenres()
    .then(res => {
      dispatch({
        type: actionTypes.GET_GENRES,
        payload: res.data
      })
    })
    .catch(res => res)
}
