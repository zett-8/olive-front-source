import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../actions/loginStatus'

class HeaderContainer extends React.Component {
  top = () => this.props.history.push('/')

  logout = () => this.props.logout()

  common = () => (
    <React.Fragment>
      <h1 onClick={() => this.top()}>Olive</h1>
      <Link to="/popular">Popular</Link>
      <Link to="/new">New</Link>
    </React.Fragment>
  )

  render() {
    if (this.props.loginStatus.token) {
      return (
        <header>
          {this.common()}
          <p onClick={() => this.logout()}>Logout</p>
        </header>
      )
    }

    return (
      <header>
        {this.common()}
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
