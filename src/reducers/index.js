import { combineReducers } from 'redux'

import loginStatusReducer from './loginStatus'
import filterReducer from './filters'
import workReducer from './works'
import historyReducer from './history'
import workDetailReducer from './workDetail'
import userDetailReducer from './userDetail'
import seedArtistReducer from './seedArtists'
import artistDetailReducer from './artistDetail'
import messagesReducer from './messages'

export default combineReducers({
  loginStatus: loginStatusReducer,
  filters: filterReducer,
  works: workReducer,
  history: historyReducer,
  workDetail: workDetailReducer,
  userDetail: userDetailReducer,
  seedArtists: seedArtistReducer,
  artistDetail: artistDetailReducer,
  messages: messagesReducer,
})
