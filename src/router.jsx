import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorBoundary from './hocs/errorBoundary'
import Header from './containers/headerContainer'
import Footer from './components/footer'
import LandingPageContainer from './containers/landingPageContainer'
import LoginPageContainer from './containers/loginPageContainer'
import NewPageContainer from './containers/newPageContainer'
import PopularContainer from './containers/popularPageContainer'
import FavoriteContainer from './containers/favoritePageContainer'
import UserContainer from './containers/userPageContainer'
import ArtistContainer from './containers/artistPageContainer'
import WorkDetailContainer from './containers/WorkdetailPageContainer'
import DealContainer from './containers/dealPageContainer'
import Page404 from './components/404'

export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <React.Fragment>
        <Route path="/" component={Header} />
        <div className="contents">
          <Switch>
            <Route exact path="/" component={LandingPageContainer} />
            <Route exact path="/login" component={LoginPageContainer} />
            <Route exact path="/new" component={NewPageContainer} />
            <Route exact path="/popular" component={PopularContainer} />
            <Route exact path="/favorites" component={FavoriteContainer} />
            <Route exact path="/artist/:id" component={ArtistContainer} />
            <Route exact path="/work/:id/detail" component={WorkDetailContainer} />
            <Route exact path="/work/:id/deal/:artist_id/:buyer_id" component={DealContainer} />
            <Route exact path="/user/:id" component={UserContainer} />

            <Route component={Page404} />
          </Switch>
        </div>
        <Route path="/" component={Footer} />
      </React.Fragment>
    </BrowserRouter>
  </ErrorBoundary>
)
