import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Elements, StripeProvider } from 'react-stripe-elements'

import { STRIPE_API_KEY } from './utils/apiKeys'

import ErrorBoundary from './hocs/errorBoundary'
import Header from './containers/headerContainer'
import Footer from './components/footer'
import LandingPageContainer from './containers/landingPageContainer'
import LoginPageContainer from './containers/loginPageContainer'
import NewPageContainer from './containers/newPageContainer'
import PopularContainer from './containers/popularPageContainer'
import ReviewContainer from './containers/reviewPageContainer'
import FavoriteContainer from './containers/favoritePageContainer'
import UserContainer from './containers/userPageContainer'
import ArtistContainer from './containers/artistPageContainer'
import WorkDetailContainer from './containers/workdetailPageContainer'
import FilteredWorksContainer from './containers/filteredWorksPageContainer'
import DealContainer from './containers/dealPageContainer'
import LogoutContainer from './containers/logoutPageContainer'
import MessageContainer from './containers/messagePageContainer'
import PasswordResetContainer from './containers/passwordResetPageContainer'
import Page404 from './components/404'


export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <StripeProvider apiKey={STRIPE_API_KEY}>
        <Elements>
          <React.Fragment>
            <Route path="/" component={Header} />
            <div className="contents">
              <Switch>
                <Route exact path="/" component={LandingPageContainer} />
                <Route exact path="/login" component={LoginPageContainer} />
                <Route exact path="/new" component={NewPageContainer} />
                <Route exact path="/popular" component={PopularContainer} />
                <Route exact path="/favorites" component={FavoriteContainer} />
                <Route exact path="/review" component={ReviewContainer} />
                <Route exact path="/artist/:id" component={ArtistContainer} />
                <Route exact path="/work/:id/detail" component={WorkDetailContainer} />
                <Route exact path="/work/:workId/deal/:myUUID/:clientId" component={DealContainer} />
                <Route exact path="/filteredWorks/:info" component={FilteredWorksContainer} />
                <Route exact path="/user/:UUID" component={UserContainer} />
                <Route exact path="/logout" component={LogoutContainer} />

                <Route exact path="/password-reset/:email" component={PasswordResetContainer} />
                <Route exact path="/message/:type" component={MessageContainer} />

                <Route component={Page404} />
              </Switch>
            </div>
            <Route path="/" component={Footer} />
          </React.Fragment>
        </Elements>
      </StripeProvider>
    </BrowserRouter>
  </ErrorBoundary>
)
