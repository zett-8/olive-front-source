import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import rootReducer from './index'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginStatus']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = (
  process.env.NODE_ENV === 'production'
    ? createStore(persistedReducer, applyMiddleware(thunk))
    : createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, createLogger())))
)

export const persistor = persistStore(store)
export default store
