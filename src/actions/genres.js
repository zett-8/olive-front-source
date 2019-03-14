import Api from '../utils/api'

export const actionTypes = {
  GET_GENRES: 'GET_GENRES'
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
