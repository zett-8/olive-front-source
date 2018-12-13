import { combineReducers } from 'redux'

import workReducer from './works'

export default combineReducers({
  works: workReducer
})
