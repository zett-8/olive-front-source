import React from 'react'
import { connect } from 'react-redux'

import GuestRouter from '../guestRouter'

class Auth extends React.Component {
  render() {
    if (this.props.loginStatus.token) return this.props.children

    return <GuestRouter />
  }
}

export default connect(
  (state) => ({
    loginStatus: state.loginStatus
  })
)(Auth)
