import { actionTypes } from '../actions/workList'

const INITIAL_STATE = {
  popularWorks: {
    pristine: true,
    contents: [],
    stock: [],
    nextWorksApi: ''
  },
  newWorks: {
    pristine: true,
    contents: [],
    stock: [],
    nextWorksApi: ''
  },
  favoriteWorks: {
    pristine: true,
    contents: [],
    stock: [],
    nextWorksApi: ''
  },
  artistWorks: {
    pristine: true,
    contents: [],
    stock: [],
    nextWorksApi: ''
  },
  filteredWorks: {
    pristine: true,
    contents: [],
    stock: [],
    nextWorksApi: ''
  },
  purchasedWorks: {
    pristine: true,
    contents: []
  }
}

export default (state = INITIAL_STATE, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    // ========================
    // ===== New Works
    case actionTypes.GET_NEW_WORKS:
      newState.newWorks = {
        pristine: false,
        contents: action.payload.results,
        stock: [],
        nextWorksApi: action.payload.next
      }
      return newState

    case actionTypes.LOAD_NEXT_NEW_WORKS:
      newState.newWorks = {
        pristine: false,
        contents: [...newState.newWorks.contents, ...newState.newWorks.stock],
        stock: [],
        nextWorksApi: newState.newWorks.nextWorksApi
      }
      return newState

    case actionTypes.GET_NEXT_NEW_WORKS:
      newState.newWorks = {
        pristine: false,
        contents: newState.newWorks.contents,
        stock: action.payload.results,
        nextWorksApi: action.payload.next
      }
      return newState


    // ========================
    // ===== Popular Works
    case actionTypes.GET_POPULAR_WORKS:
      newState.popularWorks = {
        pristine: false,
        contents: action.payload.results,
        stock: [],
        nextWorksApi: action.payload.next
      }
      return newState

    case actionTypes.LOAD_NEXT_POPULAR_WORKS:
      newState.popularWorks = {
        pristine: false,
        contents: [...newState.popularWorks.contents, ...newState.popularWorks.stock],
        stock: [],
        nextWorksApi: newState.popularWorks.nextWorksApi
      }
      return newState

    case actionTypes.GET_NEXT_POPULAR_WORKS:
      newState.popularWorks = {
        pristine: false,
        contents: newState.popularWorks.contents,
        stock: action.payload.results,
        nextWorksApi: action.payload.next
      }
      return newState


    // ========================
    // ===== Favorite Works
    case actionTypes.GET_FAVORITE_WORKS:
      newState.favoriteWorks = {
        pristine: false,
        contents: action.payload.results,
        stock: [],
        nextWorksApi: action.payload.next
      }
      return newState

    case actionTypes.LOAD_NEXT_FAVORITE_WORKS:
      newState.favoriteWorks = {
        pristine: false,
        contents: [...newState.favoriteWorks.contents, ...newState.favoriteWorks.stock],
        stock: [],
        nextWorksApi: newState.favoriteWorks.nextWorksApi
      }
      return newState

    case actionTypes.GET_NEXT_FAVORITE_WORKS:
      newState.favoriteWorks = {
        pristine: false,
        contents: newState.favoriteWorks.contents,
        stock: action.payload.results,
        nextWorksApi: action.payload.next
      }
      return newState


    // ========================
    // ===== Artist's Works
    case actionTypes.CLEAR_WORKS_OF_ARTIST:
      newState.artistWorks = {
        pristine: true,
        contents: [],
        stock: [],
        nextWorksApi: ''
      }
      return newState

    case actionTypes.GET_WORKS_OF_ARTIST:
      newState.artistWorks = {
        pristine: false,
        contents: action.payload.results,
        stock: [],
        nextWorksApi: action.payload.next
      }
      return newState

    case actionTypes.LOAD_NEXT_WORKS_OF_ARTIST:
      newState.artistWorks = {
        pristine: false,
        contents: [...newState.artistWorks.contents, ...newState.artistWorks.stock],
        stock: [],
        nextWorksApi: newState.artistWorks.nextWorksApi
      }
      return newState

    case actionTypes.GET_NEXT_WORKS_OF_ARTIST:
      newState.artistWorks = {
        pristine: false,
        contents: newState.artistWorks.contents,
        stock: action.payload.results,
        nextWorksApi: action.payload.next
      }
      return newState


    // ========================
    // ===== Filtered Works
    case actionTypes.GET_FILTERED_WORKS:
      newState.filteredWorks = {
        pristine: false,
        contents: action.payload.results,
        stock: [],
        nextWorksApi: action.payload.next
      }
      return newState

    case actionTypes.LOAD_NEXT_FILTERED_WORKS:
      newState.filteredWorks = {
        pristine: false,
        contents: [...newState.filteredWorks.contents, ...newState.filteredWorks.stock],
        stock: [],
        nextWorksApi: newState.filteredWorks.nextWorksApi
      }
      return newState
    
    case actionTypes.GET_NEXT_FILTERED_WORKS:
      newState.filteredWorks = {
        pristine: false,
        contents: newState.filteredWorks.contents,
        stock: action.payload.results,
        nextWorksApi: action.payload.next
      }
      return newState


    // ========================
    // ===== Purchased Works
    case actionTypes.GET_PURCHASED_HISTORY:
      newState.purchasedWorks = {
        pristine: false,
        contents: action.payload
      }
      return newState

    default:
      return state
  }
}
