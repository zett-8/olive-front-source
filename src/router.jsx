import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ErrorBoundary from './hocs/errorBoundary'
import LandingPageContainer from './containers/landingPageContainer'

export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <React.Fragment>
        <Route exact={true} path="/" component={LandingPageContainer} />
      </React.Fragment>
    </BrowserRouter>
  </ErrorBoundary>
)
