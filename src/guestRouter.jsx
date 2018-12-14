import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LandingPageContainer from './containers/landingPageContainer'
import LoginPageContainer from './containers/loginPageContainer'

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact={true} path="/" component={LandingPageContainer} />
      <Route exact={true} path="/login" component={LoginPageContainer} />
    </React.Fragment>
  </BrowserRouter>
)
