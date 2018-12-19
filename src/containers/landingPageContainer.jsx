import React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/loginStatus'

class LandingPageContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Welcome to Olive</h2>
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
