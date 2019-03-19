import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { logout } from '../actions/loginStatus'

class Logout extends React.Component {
  componentWillMount() {
    this.props.logout()
  }

  render() {
    return <Redirect to='/' />
  }
}

export default connect(
  null,
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(Logout)
