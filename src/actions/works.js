import Api from '../utils/api'

export const actionTypes = {
  CLEAR_WORKS: 'CLEAR_WORKS',
  GET_WORKS: 'GET_WORKS',
  GET_FILTERED_WORKS: 'GET_FILTERED_WORKS',
  GET_FAVORITE_WORKS: 'GET_FAVORITE_WORKS',
  GET_WORKS_OF_AN_ARTIST: 'GET_WORKS_OF_AN_ARTIST'
}

export const clearWorks = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_WORKS,
    payload: null
  })
}

export const getWorks = () => dispatch => {
  dispatch(clearWorks())
  return Api.getWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getFilteredWorks = q => dispatch => {
  dispatch(clearWorks())
  return Api.getFilteredWorks(q)
    .then(res => {
      dispatch({
        type: actionTypes.GET_FILTERED_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getFavoriteWorks = (userId) => dispatch => {
  dispatch(clearWorks())
  return Api.getFavoriteWorks(userId)
    .then(res => {
      dispatch({
        type: actionTypes.GET_FAVORITE_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getWorksOfAnArtist = (id) => dispatch => {
  dispatch(clearWorks())
  return Api.getWorksOfAnArtist(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORKS_OF_AN_ARTIST,
        payload: res.data
      })
    })
    .catch(res => res)
}
