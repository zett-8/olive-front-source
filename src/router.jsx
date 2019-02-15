import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ErrorBoundary from './hocs/errorBoundary'
import Header from './containers/headerContainer'
import Footer from './components/footer'
import LandingPageContainer from './containers/landingPageContainer'
import LoginPageContainer from './containers/loginPageContainer'
import NewPageContainer from './containers/newPageContainer'
import PopularContainer from './containers/popularPageContainer'
import UserContainer from './containers/userPageContainer'
import ArtistContainer from './containers/artistPageContainer'
import WorkDetailContainer from './containers/WorkdetailPageContainer'
import DealContainer from './containers/dealPageContainer'

export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' component={Header} />
        <div className='contents'>
          <Route exact={true} path='/' component={LandingPageContainer}/>
          <Route exact={true} path='/login' component={LoginPageContainer} />
          <Route exact={true} path='/new' component={NewPageContainer} />
          <Route exact={true} path='/popular' component={PopularContainer} />
          <Route exact={true} path='/artist/:id' component={ArtistContainer} />
          <Route exact={true} path='/work/:id/detail' component={WorkDetailContainer} />
          <Route exact={true} path='/work/:id/deal/:artist_id/:buyer_id' component={DealContainer} />

          <Route exact={true} path='/user/:id' component={UserContainer} />
        </div>
        <Route path='/' component={Footer} />
      </React.Fragment>
    </BrowserRouter>
  </ErrorBoundary>
)
