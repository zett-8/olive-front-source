import { combineReducers } from 'redux'

import loginStatusReducer from './loginStatus'
import workReducer from './works'
import workDetailReducer from './workDetail'
import userDetailReducer from './userDetail'
import artistDetailReducer from './artistDetail'

export default combineReducers({
  loginStatus: loginStatusReducer,
  works: workReducer,
  workDetail: workDetailReducer,
  userDetail: userDetailReducer,
  artistDetail: artistDetailReducer
})
