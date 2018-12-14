import React from 'react'
import { connect } from 'react-redux'
import LandingPageContainer from '../containers/landingPageContainer'

class Auth extends React.Component {
  render() {
    if (this.props.loginStatus.token) return this.props.children

    return <LandingPageContainer/>
  }
}

export default connect(
  (state) => ({
    loginStatus: state.loginStatus
  })
)(Auth)
