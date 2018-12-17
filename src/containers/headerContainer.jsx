import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../actions/loginStatus'

class HeaderContainer extends React.Component {
  logout = () => {
    this.props.logout()
  }

  render() {
    if (this.props.loginStatus.token) {
      return (
        <header>
          <Link to="/popular">Popular</Link>
          <Link to="/new">New</Link>
          <p onClick={() => this.logout()}>Logout</p>
        </header>
      )
    }

    return (
      <header>
        <Link to="/popular">Popular</Link>
        <Link to="/new">New</Link>
        <Link to="/login">login</Link>
      </header>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus
  }),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(HeaderContainer)
