import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions/loginStatus'

const T = () => 'Top Page'

class TopPageContainer extends React.Component {
  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <React.Fragment>
        <T />
        <p onClick={this.logout}>logout</p>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    logout: () => dispatch(logout())
  })
)(TopPageContainer)
