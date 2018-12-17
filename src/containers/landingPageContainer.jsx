import React from 'react'
import { connect } from 'react-redux'

import Header from './headerContainer'
import { login } from '../actions/loginStatus'

class LandingPageContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Olive</h1>
        <Header />
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    login: () => dispatch(login())
  })
)(LandingPageContainer)
