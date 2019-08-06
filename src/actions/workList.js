import Api from '../utils/api'

export const actionTypes = {
  GET_RECOMMEND_WORKS: 'GET_RECOMMEND_WORKS',
  LOAD_NEXT_RECOMMEND_WORKS: 'LOAD_NEXT_RECOMMEND_WORKS',
  GET_NEXT_RECOMMEND_WORKS: 'GET_NEXT_RECOMMEND_WORKS',

  GET_POPULAR_WORKS: 'GET_POPULAR_WORKS',
  LOAD_NEXT_POPULAR_WORKS: 'LOAD_NEXT_POPULAR_WORKS',
  GET_NEXT_POPULAR_WORKS: 'GET_NEXT_POPULAR_WORKS',

  GET_NEW_WORKS: 'GET_NEW_WORKS',
  LOAD_NEXT_NEW_WORKS: 'LOAD_NEXT_NEW_WORKS',
  GET_NEXT_NEW_WORKS: 'GET_NEXT_NEW_WORKS',

  GET_FAVORITE_WORKS: 'GET_FAVORITE_WORKS',
  LOAD_NEXT_FAVORITE_WORKS: 'LOAD_NEXT_FAVORITE_WORKS',
  GET_NEXT_FAVORITE_WORKS: 'GET_NEXT_FAVORITE_WORKS',

  CLEAR_WORKS_OF_ARTIST: 'CLEAR_WORKS_OF_ARTIST',
  GET_WORKS_OF_ARTIST: 'GET_WORKS_OF_AN_ARTIST',
  LOAD_NEXT_WORKS_OF_ARTIST: 'LOAD_NEXT_WORKS_OF_ARTIST',
  GET_NEXT_WORKS_OF_ARTIST: 'GET_NEXT_WORKS_OF_ARTIST',

  GET_FILTERED_WORKS: 'GET_FILTERED_WORKS',
  LOAD_NEXT_FILTERED_WORKS: 'LOAD_NEXT_FILTERED_WORKS',
  GET_NEXT_FILTERED_WORKS: 'GET_NEXT_FILTERED_WORKS',

  GET_PURCHASED_HISTORY: 'GET_PURCHASED_HISTORY'
}

export const getRecommendWorks = () => dispatch => {
  return Api.getRecommendWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_RECOMMEND_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getNextRecommendWorks = url => dispatch => {
  dispatch({ type: actionTypes.LOAD_NEXT_RECOMMEND_WORKS })

  if (url === null) return null

  return Api.getNextPageWorks(url)
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEXT_RECOMMEND_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getPopularWorks = () => dispatch => {
  return Api.getPopularWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_POPULAR_WORKS,
        payload: res.data,
      })
    })
    .catch(res => res)
}

export const getNextPopularWoks = url => dispatch => {
  dispatch({ type: actionTypes.LOAD_NEXT_POPULAR_WORKS })

  if (url === null) return null

  return Api.getNextPageWorks(url)
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEXT_POPULAR_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}


export const getNewWorks = () => dispatch => {
  return Api.getNewWorks()
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEW_WORKS,
        payload: res.data,
      })
    })
    .catch(res => res)
}

export const getNextNewWorks = url => dispatch => {
  dispatch({ type: actionTypes.LOAD_NEXT_NEW_WORKS })

  if (url === null) return null

  return Api.getNextPageWorks(url)
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEXT_NEW_WORKS,
        payload: res.data,
      })
    })
    .catch(res => res)
}


export const getFavoriteWorks = (userId) => dispatch => {
  return Api.getFavoriteWorks(userId)
    .then(res => {
      dispatch({
        type: actionTypes.GET_FAVORITE_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getNextFavoriteWorks = url => dispatch => {
  dispatch({ type: actionTypes.LOAD_NEXT_FAVORITE_WORKS })

  return Api.getNextPageWorks(url)
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEXT_FAVORITE_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}


export const clearWorksOfArtist = () => dispatch => dispatch({ type: actionTypes.CLEAR_WORKS_OF_ARTIST })

export const getWorksOfAnArtist = (id) => dispatch => {
  return Api.getWorksOfAnArtist(id)
    .then(res => {
      dispatch({
        type: actionTypes.GET_WORKS_OF_ARTIST,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getNextWorksOfAnArtist = url => dispatch => {
  dispatch({ type: actionTypes.LOAD_NEXT_WORKS_OF_ARTIST })

  return Api.getNextPageWorks(url)
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEXT_WORKS_OF_ARTIST,
        payload: res.data
      })
    })
    .catch(res => res)
}


export const getFilteredWorks = q => dispatch => {
  return Api.getFilteredWorks(q)
    .then(res => {
      dispatch({
        type: actionTypes.GET_FILTERED_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}

export const getNextFilteredWorks = url => dispatch => {
  dispatch({ type: actionTypes.LOAD_NEXT_FILTERED_WORKS })

  return Api.getNextPageWorks(url)
    .then(res => {
      dispatch({
        type: actionTypes.GET_NEXT_FILTERED_WORKS,
        payload: res.data
      })
    })
    .catch(res => res)
}


export const getPurchasedHistory = (userId) => dispatch => {
  return Api.getPurchasedHistory(userId)
    .then(res => {
      dispatch({
        type: actionTypes.GET_PURCHASED_HISTORY,
        payload: res.data
      })
    })
    .catch(res => res)
}
