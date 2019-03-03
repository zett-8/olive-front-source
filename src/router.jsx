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

// Do something every time enter some page
const renderer = Component => ({ history, match }) => {
  // render HEADER every time on purpose to refresh down menu
  return (
    <React.Fragment>
      <Route path='/' component={Header} />
      <div className="contents">
        <Component history={history} match={match} />
      </div>
    </React.Fragment>
  )
}

export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path='/' render={renderer(LandingPageContainer)}/>
          <Route exact path='/login' render={renderer(LoginPageContainer)} />
          <Route exact path='/new' render={renderer(NewPageContainer)} />
          <Route exact path='/popular' render={renderer(PopularContainer)} />
          <Route exact path='/favorites' render={renderer(FavoriteContainer)} />
          <Route exact path='/artist/:id' render={renderer(ArtistContainer)} />
          <Route exact path='/work/:id/detail' render={renderer(WorkDetailContainer)} />
          <Route exact path='/work/:id/deal/:artist_id/:buyer_id' render={renderer(DealContainer)} />
          <Route exact path='/user/:id' render={renderer(UserContainer)} />

          <Route render={renderer(Page404)} />
        </Switch>
        <Route path='/' component={Footer} />
      </React.Fragment>
    </BrowserRouter>
  </ErrorBoundary>
)
