import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import GuestRouter from '../guestRouter'

class Auth extends React.Component {
  componentDidMount() {

  }

  render() {
    if (this.props.loginStatus.token) return this.props.children

    return <Redirect to='/' />
  }
}

export default connect(
  (state) => ({
    loginStatus: state.loginStatus
  })
)(Auth)
