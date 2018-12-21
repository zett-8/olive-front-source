import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Auth from './hocs/auth'
import ErrorBoundary from './hocs/errorBoundary'
import Header from './containers/headerContainer'
import LandingPageContainer from './containers/landingPageContainer'
import LoginPageContainer from './containers/loginPageContainer'
import NewPageContainer from './containers/newPageContainer'
import PopularContainer from './containers/popularPageContainer'
import UserContainer from './containers/userPageContainer'
import ArtistContainer from './containers/artistPageContainer'
import DetailContainer from './containers/detailPageContainer'

export default () => (
  <ErrorBoundary>
    {/*<Auth>*/}
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' component={Header} />
          <Route exact={true} path='/' component={LandingPageContainer}/>
          <Route exact={true} path='/login' component={LoginPageContainer} />
          <Route exact={true} path='/new' component={NewPageContainer} />
          <Route exact={true} path='/popular' component={PopularContainer} />
          <Route exact={true} path='/artist/:id' component={ArtistContainer} />
          <Route exact={true} path='/work/:id/detail' component={DetailContainer} />
          <Auth>
            <Route exact={true} path='/user/:id' component={UserContainer} />
          </Auth>
        </React.Fragment>
      </BrowserRouter>
    {/*</Auth>*/}
  </ErrorBoundary>
)
