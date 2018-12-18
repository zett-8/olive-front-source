import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// import Auth from './hocs/auth'
import ErrorBoundary from './hocs/errorBoundary'
import LandingPageContainer from './containers/landingPageContainer'
import LoginPageContainer from './containers/loginPageContainer'
import NewPageContainer from './containers/newPageContainer'
import PopularContainer from './containers/popularPageContainer'
import DetailContainer from './containers/detailPageContainer'

export default () => (
  <ErrorBoundary>
    {/*<Auth>*/}
      <BrowserRouter>
        <React.Fragment>
          <Route exact={true} path='/' component={LandingPageContainer}/>
          <Route exact={true} path='/login' component={LoginPageContainer} />
          <Route exact={true} path='/new' component={NewPageContainer} />
          <Route exact={true} path='/popular' component={PopularContainer} />
          <Route path='/work/:id/detail' component={DetailContainer} />
        </React.Fragment>
      </BrowserRouter>
    {/*</Auth>*/}
  </ErrorBoundary>
)
