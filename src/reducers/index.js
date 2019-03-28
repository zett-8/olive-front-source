import { combineReducers } from 'redux'

import loginStatusReducer from './loginStatus'
import genreReducer from './genres'
import workReducer from './works'
import popularWorksReducer from './popularWorks'
import newWorksReducer from './newWorks'
import purchasedHistoryReducer from './purchasedHistory'
import workDetailReducer from './workDetail'
import userDetailReducer from './userDetail'
import seedArtistReducer from './seedArtists'
import artistDetailReducer from './artistDetail'
import buyerDetailReducer from './buyerDetail'
import messagesReducer from './messages'

export default combineReducers({
  loginStatus: loginStatusReducer,
  genres: genreReducer,
  works: workReducer,
  popularWorks: popularWorksReducer,
  newWorks: newWorksReducer,
  purchasedHistory: purchasedHistoryReducer,
  workDetail: workDetailReducer,
  userDetail: userDetailReducer,
  seedArtists: seedArtistReducer,
  artistDetail: artistDetailReducer,
  buyerDetail: buyerDetailReducer,
  messages: messagesReducer,
})
