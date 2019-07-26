import { combineReducers } from 'redux'

import loginStatusReducer from './loginStatus'
import genreReducer from './genres'
import workDetailReducer from './workDetail'
import workListReducer from './workList'
import userDetailReducer from './userDetail'
import seedArtistReducer from './seedArtists'
import artistDetailReducer from './artistDetail'
import buyerDetailReducer from './buyerDetail'
import messagesReducer from './messages'
import userTabReducer from './userPageTab'

export default combineReducers({
  loginStatus: loginStatusReducer,
  genres: genreReducer,
  workList: workListReducer,
  workDetail: workDetailReducer,
  userDetail: userDetailReducer,
  seedArtists: seedArtistReducer,
  artistDetail: artistDetailReducer,
  buyerDetail: buyerDetailReducer,
  messages: messagesReducer,
  userTab: userTabReducer
})
