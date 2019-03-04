import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './reducers/store'

import Router from './router'

import './styles/main.scss'

console.log(process.env.NODE_ENV)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
