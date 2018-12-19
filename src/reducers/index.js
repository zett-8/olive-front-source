import { combineReducers } from 'redux'

import loginStatusReducer from './loginStatus'
import workReducer from './works'
import detailReducer from './detail'

export default combineReducers({
  loginStatus: loginStatusReducer,
  works: workReducer,
  detail: detailReducer
})
