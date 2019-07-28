import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './reducers/store'
import Router from './router'
import './styles/main.scss'

import TagManager from 'react-gtm-module'

if (process.env.NODE_ENV === 'production') {
  console.log('olive 0.83')

  const tagManagerArgs = {
    gtmId: 'GTM-WD5QC5V'
  }

  TagManager.initialize(tagManagerArgs)
}


if (process.env.NODE_ENV !== 'production') console.log(`==== connecting to ${process.env.NODE_ENV} server ====`)

render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
