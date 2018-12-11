import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from "./reducers/store"


const T = () => 'Hello'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <T/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
