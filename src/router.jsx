import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
import WorkEditAndUploadContainer from './containers/workEditAndUploadPageContainer'
import FilteredWorksContainer from './containers/filteredWorksPageContainer'
import FilteredWorksJump from './containers/filterJumpPageContainer'
import DealContainer from './containers/dealPageContainer'
import LogoutContainer from './containers/logoutPageContainer'
import MessageContainer from './containers/messagePageContainer'
import PasswordResetContainer from './containers/passwordResetPageContainer'
import ContactContainer from './containers/contactPageContainer'
import AboutContainer from './containers/aboutPageContainer'
import HelpContainer from './containers/helpPageContainer'
import TermsPageContainer from './containers/termsPageContainer'
import PrivacyPageContainer from './containers/privacyPageContainer'
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
            <Route exact path='/sign-up/:code/' component={props => <LoginPageContainer {...props} guest={true} />} />
            <Route exact path="/new" component={NewPageContainer} />
            <Route exact path="/popular" component={PopularContainer} />
            <Route exact path="/favorites" component={FavoriteContainer} />
            <Route exact path="/review" component={ReviewContainer} />
            <Route exact path="/artist/:id" component={ArtistContainer} />
            <Route exact path="/work/:id/detail" component={WorkDetailContainer} />
            <Route exact path="/work/:id/edit" render={props => <WorkEditAndUploadContainer {...props} edit={true} />} />
            <Route exact path="/work/:workId/deal" component={DealContainer} />
            <Route exact path="/filter/:info" component={FilteredWorksJump} />
            <Route exact path="/filteredWorks/:info" component={FilteredWorksContainer} />
            <Route exact path="/user" component={UserContainer} />
            <Route exact path="/logout" component={LogoutContainer} />

            {/* footer */}
            <Route exact path="/about" component={AboutContainer} />
            <Route exact path="/faq" component={HelpContainer} />
            <Route exact path="/terms" component={TermsPageContainer} />
            <Route exact path="/privacy" component={PrivacyPageContainer} />
            <Route exact path="/contact" component={ContactContainer} />

            {/* exceptions */}
            <Route exact path="/password-reset/:email" component={PasswordResetContainer} />
            <Route exact path="/message/:type" component={MessageContainer} />

            <Route component={Page404} />
          </Switch>
        </div>
        <Route path="/" component={Footer} />
      </React.Fragment>
    </BrowserRouter>
  </ErrorBoundary>
)
