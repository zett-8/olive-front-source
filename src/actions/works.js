import Api from '../utils/api'

export const actionTypes = {
  GET_WORKS: 'GET_WORKS',
  GET_WORKS_OF_AN_ARTIST: 'GET_WORKS_OF_AN_ARTIST'
}

export const getWorks = () => dispatch => {
  return Api.getWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORKS,
        payload: res.data,
      })
    })
    .catch(res => res)
}

export const getWorksOfAnArtist = (id) => dispatch => {
  return Api.getWorksOfAnArtist(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORKS_OF_AN_ARTIST,
        payload: res.data
      })
    })
    .catch(res => res)
}
