import Api from '../utils/api'

export const actionTypes = {
  CLEAR_ARTIST_DETAIL: 'CLEAR_ARTIST_DETAIL',
  GET_ARTIST_DETAIL: 'GET_ARTIST_DETAIL'
}

export const clearArtistDetail = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_ARTIST_DETAIL,
    payload: null
  })
}

export const getArtistDetail = id => dispatch => {
  return Api.getArtistDetail(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_ARTIST_DETAIL,
        payload: res.data
      })
    })
    .catch(res => res)
}
