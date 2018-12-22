import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/header'

import { logout } from '../actions/loginStatus'

class HeaderContainer extends React.Component {
  top = () => this.props.history.push('/')

  logout = () => this.props.logout()

  render() {
    return (
      <Header
        handleLogoClicked={this.top}
        handleLogout={this.logout}
        loggedIn={Object.keys(this.props.loginStatus).length ? true : false}
        userId={this.props.loginStatus.user_id}
      />
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
  })
)(HeaderContainer)
