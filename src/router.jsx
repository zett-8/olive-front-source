import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ErrorBoundary from './hocs/errorBoundary'
import Auth from './hocs/auth'
import TopPageContainer from './containers/topPageContainer'

export default () => (
  <ErrorBoundary>
    <Auth>
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' component={TopPageContainer} />
          {/*<Route exact={true} path='/login' component={TopPageContainer} />*/}
        </React.Fragment>
      </BrowserRouter>
    </Auth>
  </ErrorBoundary>
)
