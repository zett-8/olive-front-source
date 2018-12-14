import { combineReducers } from 'redux'

import workReducer from './works'
import loginStatusReducer from './loginStatus'

export default combineReducers({
  works: workReducer,
  loginStatus: loginStatusReducer
})
