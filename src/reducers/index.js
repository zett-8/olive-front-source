import { combineReducers } from 'redux'

import loginStatusReducer from './loginStatus'
import genreReducer from './genres'
import workReducer from './works'
import historyReducer from './history'
import workDetailReducer from './workDetail'
import userDetailReducer from './userDetail'
import seedArtistReducer from './seedArtists'
import artistDetailReducer from './artistDetail'
import messagesReducer from './messages'

export default combineReducers({
  loginStatus: loginStatusReducer,
  genres: genreReducer,
  works: workReducer,
  history: historyReducer,
  workDetail: workDetailReducer,
  userDetail: userDetailReducer,
  seedArtists: seedArtistReducer,
  artistDetail: artistDetailReducer,
  messages: messagesReducer,
})
