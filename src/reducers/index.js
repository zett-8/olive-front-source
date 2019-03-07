import { combineReducers } from 'redux'

import loginStatusReducer from './loginStatus'
import filterReducer from './filters'
import workReducer from './works'
import workDetailReducer from './workDetail'
import userDetailReducer from './userDetail'
import seedArtistReducer from './seedArtists'
import artistDetailReducer from './artistDetail'
import messagesReducer from './messages'

export default combineReducers({
  loginStatus: loginStatusReducer,
  filters: filterReducer,
  works: workReducer,
  workDetail: workDetailReducer,
  userDetail: userDetailReducer,
  seedArtists: seedArtistReducer,
  artistDetail: artistDetailReducer,
  messages: messagesReducer,
})
