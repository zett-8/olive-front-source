import Api from '../utils/api'

export const actionTypes = {
  GET_SEED_ARTISTS: 'GET_SEED_ARTISTS'
}

export const getSeedArtist = () => dispatch => {
  return Api.getSeedArtists()
    .then(res => {
      dispatch({
        type: actionTypes.GET_SEED_ARTISTS,
        payload: res.data
      })
    })
    .catch(res => res)
}
